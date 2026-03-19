<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

const DB_FILE = __DIR__ . DIRECTORY_SEPARATOR . 'alatau.sqlite';

function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function get_db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $pdo = new PDO('sqlite:' . DB_FILE);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            about TEXT DEFAULT "",
            tags_json TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )'
    );
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS places (
            id TEXT PRIMARY KEY,
            payload_json TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )'
    );
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS hazards (
            id TEXT PRIMARY KEY,
            payload_json TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )'
    );

    return $pdo;
}

function get_json_body(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function rows_to_payload(PDOStatement $statement, string $column): array
{
    $items = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $decoded = json_decode($row[$column] ?? '[]', true);
        if (is_array($decoded)) {
            $items[] = $decoded;
        }
    }
    return $items;
}

$action = $_GET['action'] ?? 'health';
$db = get_db();

try {
    if ($action === 'health') {
        respond(['ok' => true, 'service' => 'alatau-backend']);
    }

    if ($action === 'users' && $_SERVER['REQUEST_METHOD'] === 'GET') {
        $statement = $db->query('SELECT id, name, email, password, about, tags_json, created_at, updated_at FROM users ORDER BY updated_at DESC');
        $users = [];
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $users[] = [
                'id' => $row['id'],
                'name' => $row['name'],
                'email' => $row['email'],
                'password' => $row['password'],
                'about' => $row['about'],
                'tags' => json_decode($row['tags_json'], true) ?: [],
                'createdAt' => $row['created_at'],
                'updatedAt' => $row['updated_at'],
            ];
        }
        respond(['ok' => true, 'users' => $users]);
    }

    if ($action === 'auth' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = get_json_body();
        $name = trim((string)($body['name'] ?? ''));
        $email = strtolower(trim((string)($body['email'] ?? '')));
        $password = trim((string)($body['password'] ?? ''));
        $about = trim((string)($body['about'] ?? ''));
        $tags = $body['tags'] ?? [];

        if ($name === '' || $email === '' || $password === '') {
            respond(['ok' => false, 'error' => 'Name, email, and password are required.'], 422);
        }

        $select = $db->prepare('SELECT * FROM users WHERE email = :email');
        $select->execute([':email' => $email]);
        $existing = $select->fetch(PDO::FETCH_ASSOC);
        $now = gmdate('c');

        if ($existing && $existing['password'] !== $password) {
            respond(['ok' => false, 'error' => 'Password is incorrect for this saved account.'], 409);
        }

        $user = [
            'id' => $existing['id'] ?? ('user-' . time() . '-' . random_int(1000, 9999)),
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'about' => $about,
            'tags' => is_array($tags) && count($tags) > 0 ? array_values($tags) : ['mobility-support'],
            'createdAt' => $existing['created_at'] ?? $now,
            'updatedAt' => $now,
        ];

        $upsert = $db->prepare(
            'INSERT INTO users (id, name, email, password, about, tags_json, created_at, updated_at)
             VALUES (:id, :name, :email, :password, :about, :tags_json, :created_at, :updated_at)
             ON CONFLICT(email) DO UPDATE SET
                name = excluded.name,
                password = excluded.password,
                about = excluded.about,
                tags_json = excluded.tags_json,
                updated_at = excluded.updated_at'
        );
        $upsert->execute([
            ':id' => $user['id'],
            ':name' => $user['name'],
            ':email' => $user['email'],
            ':password' => $user['password'],
            ':about' => $user['about'],
            ':tags_json' => json_encode($user['tags'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            ':created_at' => $user['createdAt'],
            ':updated_at' => $user['updatedAt'],
        ]);

        respond(['ok' => true, 'user' => $user]);
    }

    if ($action === 'places' && $_SERVER['REQUEST_METHOD'] === 'GET') {
        $statement = $db->query('SELECT payload_json FROM places ORDER BY updated_at DESC');
        respond(['ok' => true, 'places' => rows_to_payload($statement, 'payload_json')]);
    }

    if ($action === 'place' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = get_json_body();
        if (!isset($body['id'])) {
            respond(['ok' => false, 'error' => 'Place id is required.'], 422);
        }
        $statement = $db->prepare(
            'INSERT INTO places (id, payload_json, updated_at)
             VALUES (:id, :payload_json, :updated_at)
             ON CONFLICT(id) DO UPDATE SET
                payload_json = excluded.payload_json,
                updated_at = excluded.updated_at'
        );
        $statement->execute([
            ':id' => (string)$body['id'],
            ':payload_json' => json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            ':updated_at' => gmdate('c'),
        ]);
        respond(['ok' => true, 'place' => $body]);
    }

    if ($action === 'hazards' && $_SERVER['REQUEST_METHOD'] === 'GET') {
        $statement = $db->query('SELECT payload_json FROM hazards ORDER BY updated_at DESC');
        respond(['ok' => true, 'hazards' => rows_to_payload($statement, 'payload_json')]);
    }

    if ($action === 'hazard' && $_SERVER['REQUEST_METHOD'] === 'POST') {
        $body = get_json_body();
        if (!isset($body['id'])) {
            respond(['ok' => false, 'error' => 'Hazard id is required.'], 422);
        }
        $statement = $db->prepare(
            'INSERT INTO hazards (id, payload_json, updated_at)
             VALUES (:id, :payload_json, :updated_at)
             ON CONFLICT(id) DO UPDATE SET
                payload_json = excluded.payload_json,
                updated_at = excluded.updated_at'
        );
        $statement->execute([
            ':id' => (string)$body['id'],
            ':payload_json' => json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            ':updated_at' => gmdate('c'),
        ]);
        respond(['ok' => true, 'hazard' => $body]);
    }

    respond(['ok' => false, 'error' => 'Unknown action or method.'], 404);
} catch (Throwable $error) {
    respond(['ok' => false, 'error' => $error->getMessage()], 500);
}
