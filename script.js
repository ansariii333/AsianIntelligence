const profileOptions = [
  {
    id: "mobility-support",
    label: "Mobility Support",
    search: "Prioritize ramps, elevators, step-free entry, and smooth surfaces.",
    route: "Avoid stairs, steep slopes, and blocked sidewalks.",
  },
  {
    id: "blind-support",
    label: "Blind / Low Vision",
    search: "Boost tactile routes, Braille signage, and strong entrance cues.",
    route: "Prefer tactile lines, clear landmarks, and predictable crossings.",
  },
  {
    id: "deaf-support",
    label: "Deaf / Hard of Hearing",
    search: "Boost visual alerts, text help, and sign-language support.",
    route: "Prefer clear displays and text-first service points.",
  },
  {
    id: "sensory-friendly",
    label: "Sensory-Friendly",
    search: "Boost quiet spaces and low-crowd areas.",
    route: "Avoid dense traffic and loud construction areas.",
  },
  {
    id: "elderly",
    label: "Elderly",
    search: "Boost seating, shorter walking, and safer surfaces.",
    route: "Avoid confusing approaches and unstable surfaces.",
  },
  {
    id: "temporary-injury",
    label: "Temporary Injury",
    search: "Boost low-effort routes and easier drop-off access.",
    route: "Prefer elevators and nearby drop-off points.",
  },
];

const audienceLabels = {
  "mobility-support": "Mobility support",
  "blind-support": "Blind / low vision",
  "deaf-support": "Deaf / hard of hearing",
  "sensory-friendly": "Sensory-friendly",
  elderly: "Elderly",
  "temporary-injury": "Temporary injury",
};

const mapAudienceOptions = [
  { id: "all", label: "All places" },
  { id: "mobility-support", label: "Mobility" },
  { id: "blind-support", label: "Blind / low vision" },
  { id: "deaf-support", label: "Deaf / hearing" },
];

const filterLabels = {
  quiet: "Quiet support",
  clinic: "Clinic",
  library: "Library",
  cafe: "Cafe",
  "mobility-support": "Mobility support",
  "blind-support": "Blind support",
  "deaf-support": "Deaf support",
};

const places = [
  {
    id: "cafe-orbit",
    name: "Cafe Orbit",
    category: "Quiet cafe",
    address: "Alatau district, transit arcade block",
    distance: "420 m",
    x: "66%",
    y: "23%",
    lat: 43.2386,
    lng: 76.9211,
    confidence: 94,
    tags: ["mobility-support", "deaf-support", "sensory-friendly", "elderly"],
    description:
      "A calm cafe with step-free entry, text-first ordering, and accessible seating near the transit mall.",
    attributes: [
      "Step-free entrance",
      "Accessible restroom",
      "Visual order board",
      "Quiet zone",
      "Low crowd level",
      "Smooth surface",
    ],
    optional: ["Counter height accessible", "Wide doorway"],
    lastMeters: [
      "Use the east-side curb cut with the teal awning.",
      "The entrance door opens automatically from the right-hand side.",
      "The accessible counter is directly ahead.",
    ],
    routeNote: "Use the indoor arcade today because a sidewalk segment nearby is narrowed by fencing.",
    trust: ["Verified by venue", "Recently updated", "Verified by community"],
  },
  {
    id: "clinic-sunrise",
    name: "Sunrise Clinic",
    category: "Clinic",
    address: "North Alatau medical corridor",
    distance: "780 m",
    x: "24%",
    y: "68%",
    lat: 43.2296,
    lng: 76.9098,
    confidence: 91,
    tags: ["mobility-support", "blind-support", "elderly", "temporary-injury"],
    description:
      "Clinic with elevator access, tactile guidance from the curb, and a calm reception area.",
    attributes: [
      "Step-free entrance",
      "Elevator",
      "Braille signage",
      "Tactile guidance",
      "Visual and audio queue display",
      "Accessible seating",
    ],
    optional: ["Drop-off point nearby", "Lighting quality: high"],
    lastMeters: [
      "Approach from the north-side drop-off point.",
      "Follow the tactile strip to the main door.",
      "The elevator lobby is immediately left of reception.",
    ],
    routeNote: "Use the north entrance while the main ramp is under repair.",
    trust: ["Verified by venue", "Recently updated"],
  },
  {
    id: "tactile-library",
    name: "Tactile Library",
    category: "Library",
    address: "Central Alatau civic plaza",
    distance: "640 m",
    x: "33%",
    y: "18%",
    lat: 43.2422,
    lng: 76.9146,
    confidence: 90,
    tags: ["blind-support", "deaf-support", "sensory-friendly"],
    description:
      "Library with Braille shelf labels, tactile floor guidance, and text-first support desks.",
    attributes: [
      "Tactile guidance",
      "Braille shelf labels",
      "Audio beacon at entrance",
      "Sign-language kiosk",
      "Quiet zone",
      "Visual emergency board",
    ],
    optional: ["Screen-reader stations available", "Low crowd level"],
    lastMeters: [
      "Follow the tactile line from the plaza crossing.",
      "The entrance beacon marks the correct doorway.",
      "The help desk includes a text terminal.",
    ],
    routeNote: "Best match for blind and deaf users because both tactile and visual guidance are available.",
    trust: ["Verified by community", "Recently updated"],
  },
  {
    id: "civic-service-center",
    name: "Civic Service Center",
    category: "Support center",
    address: "Alatau service avenue",
    distance: "910 m",
    x: "52%",
    y: "55%",
    lat: 43.2334,
    lng: 76.9182,
    confidence: 88,
    tags: ["mobility-support", "deaf-support", "temporary-injury"],
    description:
      "Service center with step-free access, sign-language support, visual alerts, and a text help terminal.",
    attributes: [
      "Step-free entrance",
      "Elevator",
      "Sign-language support",
      "Visual alerts",
      "Text chat terminal",
      "Accessible counter height",
    ],
    optional: ["Drop-off zone available"],
    lastMeters: [
      "Use the plaza-side ramp.",
      "Queue numbers are shown on a large digital display.",
      "Counter 3 supports text-first assistance.",
    ],
    routeNote: "Good choice when communication needs to happen through text or sign support.",
    trust: ["Verified by venue", "Verified by community"],
  },
];

const safeZone = {
  id: "transit-hub-safe-zone",
  name: "Transit Hub Safe Zone",
  x: "18%",
  y: "16%",
  lat: 43.2408,
  lng: 76.9052,
  detail:
    "Step-free entry from the east arcade, tactile floor line from the crossing, visual boards, and volunteer support near Gate B.",
  route:
    "Follow the green corridor from the plaza. The safe-zone desk is 25 meters after the main gate.",
};

const initialHazards = [
  {
    id: "hazard-1",
    title: "Blocked sidewalk",
    detail: "Construction fencing narrows the curb approach near Cafe Orbit.",
    source: "Community verified",
    placeId: "cafe-orbit",
    x: "47%",
    y: "40%",
    lat: 43.2369,
    lng: 76.9186,
    alternative: "Use the indoor arcade entrance instead.",
  },
  {
    id: "hazard-2",
    title: "Ramp under repair",
    detail: "The main clinic ramp is closed today.",
    source: "Venue verified",
    placeId: "clinic-sunrise",
    x: "60%",
    y: "78%",
    lat: 43.2287,
    lng: 76.9114,
    alternative: "Use the north entrance and tactile strip.",
  },
  {
    id: "hazard-3",
    title: "Beacon maintenance",
    detail: "The library entrance beacon is quieter than usual this afternoon.",
    source: "Staff update",
    placeId: "tactile-library",
    x: "22%",
    y: "31%",
    lat: 43.2412,
    lng: 76.9131,
    alternative: "Use the tactile line and large-print signs.",
  },
];

const DEFAULT_PLACES = JSON.parse(JSON.stringify(places));
const DEFAULT_HAZARDS = JSON.parse(JSON.stringify(initialHazards));
const DB_NAME = "alatau-accessibility-db";
const DB_VERSION = 1;
const DB_STORES = {
  places: "places",
  hazards: "hazards",
};
const ALATAU_CENTER = [43.2388, 76.9162];
const AUTH_STORAGE_KEY = "alatau-users";
const CURRENT_USER_KEY = "alatau-current-user";
const API_BASE =
  window.location.protocol.startsWith("http") ? "backend/api.php" : "http://127.0.0.1:8080/backend/api.php";

const state = {
  selectedTags: loadSelectedTags(),
  currentQuery: "",
  currentFilters: [],
  selectedPlaceId: "cafe-orbit",
  emergencyMode: false,
  hazards: [...initialHazards],
  mapAudience: "all",
  mapFocus: { type: "place", id: "cafe-orbit" },
  userLocation: null,
  dbReady: false,
  currentUser: loadCurrentUser(),
  route: null,
  chatMessages: [],
  backendAvailable: false,
};

const mapRuntime = {
  map: null,
  tileLayer: null,
  placeLayer: null,
  hazardLayer: null,
  safeLayer: null,
  userLayer: null,
  routeLayer: null,
};

function loadSelectedTags() {
  try {
    const saved = JSON.parse(localStorage.getItem("alatau-profile-tags") || "[]");
    return Array.isArray(saved) && saved.length > 0 ? saved : ["mobility-support", "blind-support"];
  } catch {
    return ["mobility-support", "blind-support"];
  }
}

function saveSelectedTags() {
  localStorage.setItem("alatau-profile-tags", JSON.stringify(state.selectedTags));
}

function loadUsers() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
}

function loadCurrentUser() {
  try {
    const saved = JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function saveCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

async function apiRequest(action, options = {}) {
  const method = options.method || "GET";
  const requestOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  if (options.body !== undefined) {
    requestOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_BASE}?action=${encodeURIComponent(action)}`, requestOptions);
  const payload = await response.json();
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `API request failed: ${action}`);
  }
  return payload;
}

async function detectBackend() {
  try {
    await apiRequest("health");
    state.backendAvailable = true;
    return true;
  } catch {
    state.backendAvailable = false;
    return false;
  }
}

function setStatus(elementId, message, isError) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = message;
  element.className = `field-note ${isError ? "danger-note" : "success-note"}`;
}

function collectCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function applyCurrentUserToState() {
  if (!state.currentUser) {
    return;
  }
  if (Array.isArray(state.currentUser.tags) && state.currentUser.tags.length > 0) {
    state.selectedTags = [...new Set(state.currentUser.tags)];
    saveSelectedTags();
  }
}

function renderAuthState() {
  const overlay = document.getElementById("auth-overlay");
  const userPill = document.getElementById("current-user-pill");
  const logoutButton = document.getElementById("logout-button");

  if (state.currentUser) {
    overlay.classList.remove("is-open");
    userPill.textContent = state.currentUser.name || state.currentUser.email || "User";
    logoutButton.hidden = false;
  } else {
    overlay.classList.add("is-open");
    userPill.textContent = "Guest";
    logoutButton.hidden = true;
  }
}

function closeAuthOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.remove("is-open");
  }
}

function openAuthOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.add("is-open");
  }
}

function renderUserProfilePanel() {
  const panel = document.getElementById("user-profile-panel");
  if (!panel) return;

  if (!state.currentUser) {
    panel.innerHTML = `
      <div class="route-summary">
        <strong>No user session</strong>
        <span>Register or sign in to save your personal needs and let the assistant use them in answers.</span>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="detail-list">
      <div><strong>Name</strong><span>${state.currentUser.name || "Not set"}</span></div>
      <div><strong>Email</strong><span>${state.currentUser.email || "Not set"}</span></div>
      <div><strong>Needs</strong><span>${(state.currentUser.tags || []).map((tag) => audienceLabels[tag] || tag).join(", ") || "Not set"}</span></div>
      <div><strong>About</strong><span>${state.currentUser.about || "No profile note yet."}</span></div>
    </div>
  `;
}

function handleLogout() {
  state.currentUser = null;
  localStorage.removeItem(CURRENT_USER_KEY);
  openAuthOverlay();
  renderAuthState();
  renderUserProfilePanel();
  setStatus("auth-status", "You have been logged out.", false);
}

function validateAuthDraft() {
  const name = document.getElementById("auth-name").value.trim();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const password = document.getElementById("auth-password").value.trim();
  const about = document.getElementById("auth-about").value.trim();
  const tags = collectCheckedValues("auth-tag");

  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required.");
  }

  return {
    name,
    email,
    password,
    about,
    tags: tags.length > 0 ? tags : ["mobility-support"],
  };
}

async function handleDemoUser() {
  try {
    const users = state.backendAvailable ? (await apiRequest("users")).users : loadUsers();
    if (users.length === 0) {
      setStatus("auth-status", "No saved account found yet. Register first.", true);
      return;
    }
    finishAuthSuccess(users[0], state.backendAvailable ? "from SQLite" : "locally");
  } catch (error) {
    setStatus("auth-status", `Saved account load failed: ${error.message}`, true);
  }
}

function handleConfirmAuth() {
  submitAuthFlow();
}

function saveUserLocally(draft) {
  const users = loadUsers();
  const existing = users.find((user) => user.email === draft.email);

  if (existing && existing.password !== draft.password) {
    throw new Error("Password is incorrect for this saved account.");
  }

  const nextUser = existing
    ? { ...existing, name: draft.name, about: draft.about, tags: draft.tags, password: draft.password }
    : {
        id: `user-${Date.now()}`,
        ...draft,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

  const nextUsers = existing
    ? users.map((user) => (user.email === draft.email ? nextUser : user))
    : [...users, nextUser];
  saveUsers(nextUsers);
  return nextUser;
}

function finishAuthSuccess(nextUser, sourceLabel) {
  state.currentUser = nextUser;
  saveCurrentUser(nextUser);
  applyCurrentUserToState();
  closeAuthOverlay();
  document.getElementById("auth-form").reset();
  try {
    render();
  } catch {
    renderAuthState();
    renderUserProfilePanel();
  }
  setStatus("auth-status", `Welcome, ${nextUser.name}. Your profile has been saved ${sourceLabel}.`, false);
}

async function submitAuthFlow() {
  try {
    const draft = validateAuthDraft();
    let nextUser = null;

    if (state.backendAvailable) {
      try {
        nextUser = (await apiRequest("auth", { method: "POST", body: draft })).user;
      } catch (error) {
        state.backendAvailable = false;
        setStatus("db-status", `Backend auth unavailable, saved locally instead: ${error.message}`, true);
      }
    }

    if (!nextUser) {
      nextUser = saveUserLocally(draft);
      finishAuthSuccess(nextUser, "locally");
      return;
    }

    finishAuthSuccess(nextUser, "to SQLite");
  } catch (error) {
    setStatus("auth-status", error.message, true);
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  await submitAuthFlow();
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not supported in this browser."));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORES.places)) {
        db.createObjectStore(DB_STORES.places, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(DB_STORES.hazards)) {
        db.createObjectStore(DB_STORES.hazards, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Failed to open database."));
  });
}

function runStore(storeName, mode, callback) {
  return openDatabase().then(
    (db) =>
      new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, mode);
        const store = transaction.objectStore(storeName);
        const request = callback(store);
        if (request) {
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error || new Error(`Store request failed: ${storeName}`));
        } else {
          transaction.oncomplete = () => resolve();
        }
        transaction.onerror = () => reject(transaction.error || new Error(`Transaction failed: ${storeName}`));
      }),
  );
}

function getAllFromStore(storeName) {
  return runStore(storeName, "readonly", (store) => store.getAll());
}

function putToStore(storeName, value) {
  return runStore(storeName, "readwrite", (store) => store.put(value));
}

function clearStore(storeName) {
  return runStore(storeName, "readwrite", (store) => store.clear());
}

async function seedDatabaseIfNeeded() {
  const storedPlaces = await getAllFromStore(DB_STORES.places);
  if (storedPlaces.length === 0) {
    await Promise.all(DEFAULT_PLACES.map((place) => putToStore(DB_STORES.places, place)));
  }

  const storedHazards = await getAllFromStore(DB_STORES.hazards);
  if (storedHazards.length === 0) {
    await Promise.all(DEFAULT_HAZARDS.map((hazard) => putToStore(DB_STORES.hazards, hazard)));
  }
}

async function syncBackendToIndexedDb() {
  if (!state.backendAvailable) {
    return;
  }

  const [backendPlaces, backendHazards] = await Promise.all([
    apiRequest("places").then((result) => result.places),
    apiRequest("hazards").then((result) => result.hazards),
  ]);

  if (backendPlaces.length > 0) {
    await clearStore(DB_STORES.places);
    await Promise.all(backendPlaces.map((place) => putToStore(DB_STORES.places, place)));
  }

  if (backendHazards.length > 0) {
    await clearStore(DB_STORES.hazards);
    await Promise.all(backendHazards.map((hazard) => putToStore(DB_STORES.hazards, hazard)));
  }
}

async function loadDatabaseData() {
  const [storedPlaces, storedHazards] = await Promise.all([
    getAllFromStore(DB_STORES.places),
    getAllFromStore(DB_STORES.hazards),
  ]);

  places.length = 0;
  storedPlaces.forEach((place) => places.push(place));
  state.hazards = storedHazards;
  state.dbReady = true;
  ensureSelection();
}

async function initializeDatabase() {
  try {
    await detectBackend();
    await seedDatabaseIfNeeded();
    await syncBackendToIndexedDb();
    await loadDatabaseData();
    setStatus(
      "db-status",
      `Database connected. ${state.backendAvailable ? "SQLite backend is online." : "Running in local-only mode."}`,
      false,
    );
  } catch (error) {
    state.dbReady = false;
    setStatus("db-status", `Database error: ${error.message}`, true);
  }
}

async function savePlaceToDatabase(place) {
  await putToStore(DB_STORES.places, place);
  if (state.backendAvailable) {
    await apiRequest("place", { method: "POST", body: place });
  }
  await loadDatabaseData();
}

async function saveHazardToDatabase(hazard) {
  await putToStore(DB_STORES.hazards, hazard);
  if (state.backendAvailable) {
    await apiRequest("hazard", { method: "POST", body: hazard });
  }
  await loadDatabaseData();
}

async function reloadDatabaseData() {
  await loadDatabaseData();
  render();
  setStatus("db-status", "Database reloaded from IndexedDB.", false);
}

async function resetDatabaseData() {
  await clearStore(DB_STORES.places);
  await clearStore(DB_STORES.hazards);
  await seedDatabaseIfNeeded();
  await loadDatabaseData();
  render();
  setStatus("db-status", "Database reset to the default Alatau dataset.", false);
}

function normalizeText(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function buildSearchBlob(place) {
  return normalizeText(
    [place.name, place.category, place.description, place.routeNote, ...place.attributes, ...place.optional].join(" "),
  );
}

function formatDistanceKm(distanceKm) {
  return distanceKm < 1 ? `${Math.round(distanceKm * 1000)} m` : `${distanceKm.toFixed(1)} km`;
}

function haversineDistance(lat1, lng1, lat2, lng2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getDistanceLabel(place) {
  if (!state.userLocation || typeof place.lat !== "number" || typeof place.lng !== "number") {
    return place.distance;
  }
  return formatDistanceKm(haversineDistance(state.userLocation.lat, state.userLocation.lng, place.lat, place.lng));
}

function getEstimatedWalkingSpeedKmh() {
  if (state.selectedTags.includes("mobility-support")) return 3.2;
  if (state.selectedTags.includes("temporary-injury")) return 2.8;
  if (state.selectedTags.includes("elderly")) return 3.0;
  return 4.5;
}

function getRouteOrigin() {
  if (state.userLocation) {
    return state.userLocation;
  }
  const map = mapRuntime.map;
  if (map) {
    const center = map.getCenter();
    return { lat: center.lat, lng: center.lng };
  }
  return { lat: ALATAU_CENTER[0], lng: ALATAU_CENTER[1] };
}

function getPlaceById(placeId) {
  return places.find((place) => place.id === placeId) || places[0];
}

function getHazardById(hazardId) {
  return state.hazards.find((hazard) => hazard.id === hazardId) || state.hazards[0];
}

function parseQuery(query) {
  const text = normalizeText(query);
  const filters = [];

  if (!text) return filters;
  if (text.includes("blind") || text.includes("braille") || text.includes("такт") || text.includes("слеп")) filters.push("blind-support");
  if (text.includes("deaf") || text.includes("sign") || text.includes("глух") || text.includes("жест")) filters.push("deaf-support");
  if (text.includes("step-free") || text.includes("ramp") || text.includes("wheelchair") || text.includes("пандус") || text.includes("опорно")) filters.push("mobility-support");
  if (text.includes("quiet") || text.includes("тихий")) filters.push("quiet");
  if (text.includes("clinic") || text.includes("клиник")) filters.push("clinic");
  if (text.includes("library") || text.includes("библиот")) filters.push("library");
  if (text.includes("cafe") || text.includes("кафе")) filters.push("cafe");

  return [...new Set(filters)];
}

function scorePlace(place) {
  const blob = buildSearchBlob(place);
  let score = place.confidence;

  state.selectedTags.forEach((tag) => {
    if (place.tags.includes(tag)) score += 9;
  });

  state.currentFilters.forEach((filter) => {
    if (filter === "quiet" && blob.includes("quiet")) score += 10;
    if (filter === "clinic" && blob.includes("clinic")) score += 10;
    if (filter === "library" && blob.includes("library")) score += 10;
    if (filter === "cafe" && blob.includes("cafe")) score += 10;
    if (place.tags.includes(filter)) score += 12;
  });

  return score;
}

function getRankedPlaces() {
  return [...places].sort((a, b) => scorePlace(b) - scorePlace(a));
}

function getVisiblePlaces() {
  const ranked = getRankedPlaces();
  if (state.mapAudience === "all") return ranked;
  return ranked.filter((place) => place.tags.includes(state.mapAudience));
}

function getVisibleHazards() {
  if (state.mapAudience === "all") return state.hazards;
  const visibleIds = new Set(getVisiblePlaces().map((place) => place.id));
  return state.hazards.filter((hazard) => visibleIds.has(hazard.placeId));
}

function ensureSelection() {
  const visiblePlaces = getVisiblePlaces();
  if (visiblePlaces.length === 0) {
    state.mapFocus = { type: "safe-zone", id: safeZone.id };
    return;
  }
  if (!visiblePlaces.some((place) => place.id === state.selectedPlaceId)) {
    state.selectedPlaceId = visiblePlaces[0].id;
  }
  if (state.mapFocus.type === "place" && !visiblePlaces.some((place) => place.id === state.mapFocus.id)) {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
  if (state.mapFocus.type === "hazard" && !getVisibleHazards().some((hazard) => hazard.id === state.mapFocus.id)) {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
}

function resetRouteIfPlaceChanged(nextPlaceId) {
  if (state.route && state.route.placeId !== nextPlaceId) {
    state.route = null;
    if (mapRuntime.routeLayer) {
      mapRuntime.routeLayer.clearLayers();
    }
  }
}

function setQuery(query) {
  state.currentQuery = query.trim();
  state.currentFilters = parseQuery(state.currentQuery);
  render();
}

function toggleTag(tagId) {
  if (state.selectedTags.includes(tagId)) {
    state.selectedTags = state.selectedTags.filter((tag) => tag !== tagId);
  } else {
    state.selectedTags = [...state.selectedTags, tagId];
  }
  render();
}

function selectPlace(placeId, scrollToPlaceCard) {
  resetRouteIfPlaceChanged(placeId);
  state.selectedPlaceId = placeId;
  state.mapFocus = { type: "place", id: placeId };
  render();
  if (scrollToPlaceCard) {
    document.querySelector("#place").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setMapAudience(audienceId) {
  state.mapAudience = audienceId;
  ensureSelection();
  render();
}

function setMapFocus(type, id) {
  if (type === "place") {
    resetRouteIfPlaceChanged(id);
  }
  state.mapFocus = { type, id };
  if (type === "place") {
    state.selectedPlaceId = id;
  }
  render();
}

function handleEmergencyToggle(forceState) {
  state.emergencyMode = typeof forceState === "boolean" ? forceState : !state.emergencyMode;
  document.body.classList.toggle("emergency-mode", state.emergencyMode);
  if (state.emergencyMode) {
    state.mapFocus = { type: "safe-zone", id: safeZone.id };
  } else {
    state.mapFocus = { type: "place", id: state.selectedPlaceId };
  }
  render();
}

function renderProfileTags() {
  const container = document.getElementById("profile-tags");
  container.innerHTML = "";

  profileOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tag-button${state.selectedTags.includes(option.id) ? " is-active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", state.selectedTags.includes(option.id) ? "true" : "false");
    button.addEventListener("click", () => toggleTag(option.id));
    container.appendChild(button);
  });
}

function renderProfileSummary() {
  const summary = document.getElementById("profile-summary");
  const searchBehavior = document.getElementById("search-behavior-copy");
  const routeBehavior = document.getElementById("route-behavior-copy");
  const chosen = profileOptions.filter((option) => state.selectedTags.includes(option.id));

  summary.innerHTML = "";
  if (chosen.length === 0) {
    summary.innerHTML = "<li>No profile tags selected yet.</li>";
    searchBehavior.textContent = "Results are not personalized yet.";
    routeBehavior.textContent = "Routing uses the default safest route.";
    return;
  }

  chosen.forEach((option) => {
    const item = document.createElement("li");
    item.textContent = option.label;
    summary.appendChild(item);
  });

  searchBehavior.textContent = chosen.map((option) => option.search).join(" ");
  routeBehavior.textContent = chosen.map((option) => option.route).join(" ");
}

function renderMapFilters() {
  const row = document.getElementById("map-filter-row");
  row.innerHTML = "";

  mapAudienceOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-filter-button${state.mapAudience === option.id ? " is-active" : ""}`;
    button.textContent = option.label;
    button.setAttribute("aria-pressed", state.mapAudience === option.id ? "true" : "false");
    button.addEventListener("click", () => setMapAudience(option.id));
    row.appendChild(button);
  });
}

function createPin(className, left, top, title, subtitle, selected, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `map-pin ${className}${selected ? " is-selected" : ""}`;
  button.style.left = left;
  button.style.top = top;
  button.innerHTML = `${title}${subtitle ? `<small>${subtitle}</small>` : ""}`;
  button.addEventListener("click", onClick);
  return button;
}

function createLeafletIcon(color, label) {
  return window.L.divIcon({
    className: "",
    html: `<div style="display:grid;place-items:center;width:18px;height:18px;border-radius:999px;border:3px solid #fff;background:${color};box-shadow:0 8px 18px rgba(0,0,0,0.18);"></div><span style="display:none;">${label}</span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -8],
  });
}

function ensureLeafletMap() {
  if (!window.L) {
    return null;
  }

  if (!mapRuntime.map) {
    const frame = document.getElementById("map-frame");
    frame.innerHTML = "";
    mapRuntime.map = window.L.map("map-frame", {
      scrollWheelZoom: true,
      zoomControl: true,
    }).setView(ALATAU_CENTER, 14);

    mapRuntime.tileLayer = window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRuntime.map);

    mapRuntime.placeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.hazardLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.safeLayer = window.L.layerGroup().addTo(mapRuntime.map);
    mapRuntime.userLayer = window.L.layerGroup().addTo(mapRuntime.map);
  }

  return mapRuntime.map;
}

function renderRouteSummary() {
  const summary = document.getElementById("route-summary");
  if (!summary) return;

  if (!state.route) {
    summary.innerHTML = `
      <strong>Route is not built yet</strong>
      <span>Select a place and tap Build route. If location is allowed, the app will show time and distance.</span>
    `;
    return;
  }

  summary.innerHTML = `
    <strong>Route to ${state.route.placeName}</strong>
    <span>${state.route.distanceText} · ${state.route.durationText} · source: ${state.route.sourceLabel}</span>
    <p class="field-note">${state.route.note}</p>
  `;
}

function clearRoute() {
  state.route = null;
  if (mapRuntime.routeLayer) {
    mapRuntime.routeLayer.clearLayers();
  }
  renderRouteSummary();
  setStatus("db-status", "Route cleared from the map.", false);
}

async function buildRouteToSelectedPlace() {
  const place = getPlaceById(state.selectedPlaceId);
  const origin = getRouteOrigin();
  const map = ensureLeafletMap();

  if (mapRuntime.routeLayer) {
    mapRuntime.routeLayer.clearLayers();
  } else if (map) {
    mapRuntime.routeLayer = window.L.layerGroup().addTo(map);
  }

  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/walking/${origin.lng},${origin.lat};${place.lng},${place.lat}?overview=full&geometries=geojson`,
    );
    const data = await response.json();
    if (!response.ok || !data.routes || data.routes.length === 0) {
      throw new Error("Routing service did not return a route.");
    }

    const route = data.routes[0];
    const latLngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    if (mapRuntime.routeLayer) {
      window.L.polyline(latLngs, {
        color: "#0d8c7f",
        weight: 5,
        opacity: 0.9,
      }).addTo(mapRuntime.routeLayer);
      map.fitBounds(window.L.latLngBounds(latLngs), { padding: [40, 40] });
    }

    state.route = {
      placeId: place.id,
      placeName: place.name,
      distanceText: formatDistanceKm(route.distance / 1000),
      durationText: `${Math.max(1, Math.round(route.duration / 60))} min`,
      sourceLabel: "OSRM live route",
      note: "Walking route built from the live map service for the currently selected place.",
    };
    renderRouteSummary();
    setStatus("db-status", `Route built to ${place.name}.`, false);
  } catch (error) {
    const distanceKm = haversineDistance(origin.lat, origin.lng, place.lat, place.lng);
    const durationMin = Math.max(1, Math.round((distanceKm / getEstimatedWalkingSpeedKmh()) * 60));
    if (mapRuntime.routeLayer && map) {
      window.L.polyline(
        [
          [origin.lat, origin.lng],
          [place.lat, place.lng],
        ],
        {
          color: "#d98324",
          weight: 4,
          opacity: 0.8,
          dashArray: "10 8",
        },
      ).addTo(mapRuntime.routeLayer);
      map.fitBounds(
        window.L.latLngBounds([
          [origin.lat, origin.lng],
          [place.lat, place.lng],
        ]),
        { padding: [40, 40] },
      );
    }

    state.route = {
      placeId: place.id,
      placeName: place.name,
      distanceText: formatDistanceKm(distanceKm),
      durationText: `${durationMin} min`,
      sourceLabel: "Local estimate",
      note: `Live routing is unavailable, so the app shows an estimated direct route. ${error.message}`,
    };
    renderRouteSummary();
    setStatus("db-status", `Estimated route built to ${place.name}.`, false);
  }
}

function renderLeafletMap(visiblePlaces, visibleHazards) {
  const map = ensureLeafletMap();
  if (!map) {
    return false;
  }

  mapRuntime.placeLayer.clearLayers();
  mapRuntime.hazardLayer.clearLayers();
  mapRuntime.safeLayer.clearLayers();
  mapRuntime.userLayer.clearLayers();

  window.L.marker([safeZone.lat, safeZone.lng], {
    icon: createLeafletIcon("#24835b", safeZone.name),
  })
    .bindPopup(`<strong>${safeZone.name}</strong><br>${safeZone.detail}`)
    .addTo(mapRuntime.safeLayer)
    .on("click", () => setMapFocus("safe-zone", safeZone.id));

  visiblePlaces.forEach((place) => {
    const marker = window.L.marker([place.lat, place.lng], {
      icon: createLeafletIcon(place.id === state.selectedPlaceId ? "#0d8c7f" : "#ffae42", place.name),
    })
      .bindPopup(
        `<strong>${place.name}</strong><br>${place.category}<br>${place.address || ""}<br>${getDistanceLabel(place)}`,
      )
      .addTo(mapRuntime.placeLayer);

    marker.on("click", () => setMapFocus("place", place.id));
  });

  visibleHazards.forEach((hazard) => {
    if (typeof hazard.lat !== "number" || typeof hazard.lng !== "number") {
      return;
    }
    const marker = window.L.marker([hazard.lat, hazard.lng], {
      icon: createLeafletIcon("#d1472f", hazard.title),
    })
      .bindPopup(`<strong>${hazard.title}</strong><br>${hazard.detail}`)
      .addTo(mapRuntime.hazardLayer);

    marker.on("click", () => setMapFocus("hazard", hazard.id));
  });

  if (state.userLocation) {
    window.L.circleMarker([state.userLocation.lat, state.userLocation.lng], {
      radius: 8,
      color: "#085d55",
      weight: 3,
      fillColor: "#0d8c7f",
      fillOpacity: 0.9,
    })
      .bindPopup("Your current location")
      .addTo(mapRuntime.userLayer);
  }

  if (state.mapFocus.type === "place") {
    const selectedPlace = getPlaceById(state.mapFocus.id);
    map.flyTo([selectedPlace.lat, selectedPlace.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
  } else if (state.mapFocus.type === "hazard") {
    const selectedHazard = getHazardById(state.mapFocus.id);
    if (typeof selectedHazard.lat === "number" && typeof selectedHazard.lng === "number") {
      map.flyTo([selectedHazard.lat, selectedHazard.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
    }
  } else if (state.mapFocus.type === "safe-zone") {
    map.flyTo([safeZone.lat, safeZone.lng], Math.max(map.getZoom(), 15), { duration: 0.6 });
  }

  document.getElementById("map-summary-status").textContent =
    `${visiblePlaces.length} places and ${visibleHazards.length} active hazards shown on the live Alatau map.`;
  return true;
}

function renderStaticMap(visiblePlaces, visibleHazards) {
  const frame = document.getElementById("map-frame");
  frame.innerHTML = "";

  if (visiblePlaces.length === 0) {
    frame.innerHTML = `<div class="map-empty"><div><strong>No places for this filter.</strong><p>Use another audience filter or open safe mode.</p></div></div>`;
    document.getElementById("map-summary-status").textContent = "0 places shown on the map.";
    return;
  }

  const primaryRoute = document.createElement("div");
  primaryRoute.className = "map-route route-primary";
  primaryRoute.textContent = state.emergencyMode ? "Safe-zone route" : "Preferred route";

  const secondaryRoute = document.createElement("div");
  secondaryRoute.className = "map-route route-secondary";
  secondaryRoute.textContent = state.emergencyMode ? "Support route" : "Alternate route";

  frame.append(primaryRoute, secondaryRoute);

  frame.appendChild(
    createPin(
      "safe-pin",
      safeZone.x,
      safeZone.y,
      safeZone.name,
      state.emergencyMode ? "Emergency focus" : "Safe zone",
      state.mapFocus.type === "safe-zone",
      () => setMapFocus("safe-zone", safeZone.id),
    ),
  );

  visiblePlaces.forEach((place) => {
    frame.appendChild(
      createPin(
        "place-pin",
        place.x,
        place.y,
        place.name,
        place.category,
        state.mapFocus.type === "place" && state.mapFocus.id === place.id,
        () => setMapFocus("place", place.id),
      ),
    );
  });

  visibleHazards.forEach((hazard) => {
    frame.appendChild(
      createPin(
        "hazard-pin",
        hazard.x,
        hazard.y,
        hazard.title,
        "Hazard",
        state.mapFocus.type === "hazard" && state.mapFocus.id === hazard.id,
        () => setMapFocus("hazard", hazard.id),
      ),
    );
  });

  document.getElementById("map-summary-status").textContent =
    `${visiblePlaces.length} places and ${visibleHazards.length} active hazards shown on the fallback map.`;
}

function renderMap() {
  ensureSelection();
  const visiblePlaces = getVisiblePlaces();
  const visibleHazards = getVisibleHazards();
  if (!renderLeafletMap(visiblePlaces, visibleHazards)) {
    renderStaticMap(visiblePlaces, visibleHazards);
  }
}

function renderMapInspector() {
  const inspector = document.getElementById("map-inspector");

  if (state.mapFocus.type === "safe-zone") {
    inspector.innerHTML = `
      <span class="mini-label">Safe zone</span>
      <h3>${safeZone.name}</h3>
      <p>${safeZone.detail}</p>
      <div class="detail-list">
        <div><strong>Safe route</strong><span>${safeZone.route}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="safe-zone-support-button" type="button">Open support</button>
        <button class="ghost-button" id="safe-zone-back-button" type="button">Return to place</button>
      </div>
    `;

    document.getElementById("safe-zone-support-button").addEventListener("click", () => {
      document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("safe-zone-back-button").addEventListener("click", () => {
      setMapFocus("place", state.selectedPlaceId);
    });
    return;
  }

  if (state.mapFocus.type === "hazard") {
    const hazard = getHazardById(state.mapFocus.id);
    const place = getPlaceById(hazard.placeId);
    inspector.innerHTML = `
      <span class="mini-label">Hazard</span>
      <h3>${hazard.title}</h3>
      <p>${hazard.detail}</p>
      <div class="detail-list">
        <div><strong>Source</strong><span>${hazard.source}</span></div>
        <div><strong>Safer alternative</strong><span>${hazard.alternative}</span></div>
        <div><strong>Linked place</strong><span>${place.name}</span></div>
      </div>
      <div class="button-row">
        <button class="primary-button" id="hazard-place-button" type="button">Open related place</button>
      </div>
    `;

    document.getElementById("hazard-place-button").addEventListener("click", () => {
      selectPlace(place.id, true);
    });
    return;
  }

  const place = getPlaceById(state.mapFocus.id);
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  inspector.innerHTML = `
    <span class="mini-label">Map focus</span>
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <div class="audience-badge-row">
      ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
    </div>
    <div class="detail-list">
      <div><strong>Best approach</strong><span>${place.lastMeters[0]}</span></div>
      <div><strong>Route guidance</strong><span>${place.routeNote}</span></div>
      <div><strong>Nearby hazards</strong><span>${nearbyHazards.length > 0 ? nearbyHazards.map((hazard) => hazard.title).join(", ") : "No active hazards nearby."}</span></div>
    </div>
    <div class="button-row">
      <button class="primary-button" id="inspector-place-button" type="button">Open place card</button>
      <button class="ghost-button" id="inspector-safe-button" type="button">Show safe zone</button>
    </div>
  `;

  document.getElementById("inspector-place-button").addEventListener("click", () => {
    document.querySelector("#place").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("inspector-safe-button").addEventListener("click", () => {
    setMapFocus("safe-zone", safeZone.id);
  });
}

function renderResults() {
  const results = document.getElementById("results-list");
  const status = document.getElementById("results-status");
  const filters = document.getElementById("active-filters");
  const ranked = getVisiblePlaces();

  filters.textContent =
    state.currentFilters.length > 0
      ? `${state.currentFilters.map((filter) => filterLabels[filter] || filter).join(", ")}. Personalized by ${state.selectedTags.map((tag) => audienceLabels[tag] || tag).join(", ")}.`
      : "No explicit search filters. Results are ranked from selected needs and trust labels.";

  results.innerHTML = "";

  if (ranked.length === 0) {
    results.innerHTML = `<article class="result-card"><strong>No places match this audience filter.</strong></article>`;
    status.textContent = "0 places shown.";
    return;
  }

  status.textContent = `${ranked.length} places ranked. Top match: ${ranked[0].name}.`;

  ranked.forEach((place) => {
    const card = document.createElement("article");
    card.className = `result-card${place.id === state.selectedPlaceId ? " is-selected" : ""}`;
    card.innerHTML = `
      <div class="result-topline">
        <div>
          <strong>${place.name}</strong>
          <p>${place.category} · ${place.distance}</p>
        </div>
        <span class="score-pill">${scorePlace(place)} match</span>
      </div>
      <p>${place.description}</p>
      <div class="attribute-list">
        ${place.attributes.slice(0, 4).map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const showMap = document.createElement("button");
    showMap.type = "button";
    showMap.className = "primary-button";
    showMap.textContent = "Show on map";
    showMap.addEventListener("click", () => {
      selectPlace(place.id, false);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const openCard = document.createElement("button");
    openCard.type = "button";
    openCard.className = "ghost-button";
    openCard.textContent = "Open place card";
    openCard.addEventListener("click", () => selectPlace(place.id, true));

    actions.append(showMap, openCard);
    card.appendChild(actions);
    results.appendChild(card);
  });
}

function renderPlaceCard() {
  const place = getPlaceById(state.selectedPlaceId);
  const container = document.getElementById("place-card");

  container.innerHTML = `
    <header>
      <div class="place-meta">
        <span class="mini-label">${place.category}</span>
        <span class="score-pill">${scorePlace(place)} match</span>
      </div>
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <div class="audience-badge-row">
        ${place.tags.map((tag) => `<span class="audience-badge">${audienceLabels[tag] || tag}</span>`).join("")}
      </div>
      <div class="place-card-photo" role="img" aria-label="Representative place photo for ${place.name}"></div>
      <div class="confidence-row">
        ${place.trust
          .map((label) => {
            const className =
              label === "Verified by venue"
                ? "trust-venue"
                : label === "Verified by community"
                  ? "trust-community"
                  : "trust-recent";
            return `<span class="trust-label ${className}">${label}</span>`;
          })
          .join("")}
      </div>
    </header>
    <section>
      <h4>Accessibility attributes</h4>
      <div class="attribute-list">
        ${place.attributes.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
        ${place.optional.map((item) => `<span class="mini-pill">${item}</span>`).join("")}
      </div>
    </section>
    <section class="last-meters-card">
      <span class="mini-label">Last 20 meters</span>
      <ul class="summary-list">
        ${place.lastMeters.map((step) => `<li>${step}</li>`).join("")}
      </ul>
    </section>
    <section class="route-note">
      <span class="mini-label">Route guidance</span>
      <p>${place.routeNote}</p>
    </section>
  `;
}

function renderHazards() {
  const count = document.getElementById("hazard-count");
  const feed = document.getElementById("hazard-feed");
  count.textContent = `${state.hazards.length} active reports`;
  feed.innerHTML = "";

  state.hazards.forEach((hazard) => {
    const item = document.createElement("article");
    item.className = "hazard-item";
    item.innerHTML = `
      <strong>${hazard.title}</strong>
      <p>${hazard.detail}</p>
      <span class="mini-label">${hazard.source}</span>
    `;

    const actions = document.createElement("div");
    actions.className = "button-row";

    const mapButton = document.createElement("button");
    mapButton.type = "button";
    mapButton.className = "ghost-button";
    mapButton.textContent = "Show on map";
    mapButton.addEventListener("click", () => {
      setMapFocus("hazard", hazard.id);
      document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const placeButton = document.createElement("button");
    placeButton.type = "button";
    placeButton.className = "primary-button";
    placeButton.textContent = "Open related place";
    placeButton.addEventListener("click", () => selectPlace(hazard.placeId, true));

    actions.append(mapButton, placeButton);
    item.appendChild(actions);
    feed.appendChild(item);
  });
}

function renderEmergencyState() {
  const status = document.getElementById("emergency-status");
  const safeZoneCopy = document.getElementById("safe-zone-copy");
  const supportCopy = document.getElementById("support-copy");
  const smogCard = document.getElementById("smog-alert-card");
  const toggle = document.getElementById("emergency-toggle");

  toggle.setAttribute("aria-pressed", state.emergencyMode ? "true" : "false");

  if (state.emergencyMode) {
    status.innerHTML = `<span class="status-pill">Emergency</span><p>High-contrast mode is active. The safe zone and simplest route are prioritized.</p>`;
    safeZoneCopy.textContent = "Proceed to the Transit Hub Safe Zone using the east arcade. The route avoids barriers and stairs.";
    supportCopy.textContent = "Emergency mode reduces visual noise and surfaces volunteer help first.";
    smogCard.querySelector("strong").textContent = "Earthquake mode active";
    smogCard.querySelector("p").textContent = "The interface now highlights the safe zone and emergency support actions.";
    toggle.textContent = "Exit Safe Mode";
    return;
  }

  status.innerHTML = `<span class="status-pill">Normal</span><p>Safe zones and alerts are visible, but the interface stays in standard browsing mode.</p>`;
  safeZoneCopy.textContent = safeZone.detail;
  supportCopy.textContent = "Request a volunteer escort, switch to text-first help, or trigger emergency mode for a simplified interface.";
  smogCard.querySelector("strong").textContent = "Smog-aware routing active";
  smogCard.querySelector("p").textContent = "Air quality is elevated today. The default route favors calmer passages and lower traffic streets.";
  toggle.textContent = "Earthquake Safe Mode";
}

function getHazardPosition(placeId) {
  const place = getPlaceById(placeId);
  const count = state.hazards.filter((hazard) => hazard.placeId === placeId).length;
  const offsetX = [-8, 7, -5, 9][count % 4];
  const offsetY = [9, -7, 6, -9][count % 4];
  const latOffset = [0.0012, -0.0008, 0.0009, -0.0011][count % 4];
  const lngOffset = [-0.0011, 0.0009, -0.0007, 0.001][count % 4];
  return {
    x: `${Math.min(88, Math.max(12, Number.parseFloat(place.x) + offsetX))}%`,
    y: `${Math.min(84, Math.max(14, Number.parseFloat(place.y) + offsetY))}%`,
    lat: Number((place.lat + latOffset).toFixed(6)),
    lng: Number((place.lng + lngOffset).toFixed(6)),
  };
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("search-input");
  setQuery(input.value);
  document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSaveProfile() {
  saveSelectedTags();
  document.getElementById("save-status").textContent =
    "Profile saved. Ranking, map pins, and route guidance now use your selected needs.";
}

async function handleHazardSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("hazard-title");
  const detail = document.getElementById("hazard-detail");
  const status = document.getElementById("hazard-form-status");

  if (!title.value.trim() || !detail.value.trim()) {
    status.textContent = "Please fill in both the issue title and details.";
    status.className = "field-note danger-note";
    return;
  }

  const place = getPlaceById(state.selectedPlaceId);
  const position = getHazardPosition(place.id);

  const hazard = {
    id: `hazard-${Date.now()}`,
    title: title.value.trim(),
    detail: detail.value.trim(),
    source: `Community submitted for ${place.name}`,
    placeId: place.id,
    x: position.x,
    y: position.y,
    lat: position.lat,
    lng: position.lng,
    alternative: `Open ${place.name} to see the latest safe approach guidance.`,
  };

  try {
    await saveHazardToDatabase(hazard);
    title.value = "";
    detail.value = "";
    status.textContent = `Hazard saved for ${place.name}.`;
    status.className = "field-note success-note";
    render();
    setStatus("db-status", `Hazard saved to the database for ${place.name}.`, false);
  } catch (error) {
    status.textContent = "Failed to save hazard.";
    status.className = "field-note danger-note";
    setStatus("db-status", `Hazard save failed: ${error.message}`, true);
  }
}

function collectPlaceTags() {
  return Array.from(document.querySelectorAll('input[name="place-tag"]:checked')).map((input) => input.value);
}

function buildAttributesFromFeatures(features) {
  return features
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function handlePlaceSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("place-name").value.trim();
  const category = document.getElementById("place-category").value.trim();
  const address = document.getElementById("place-address").value.trim();
  const lat = Number.parseFloat(document.getElementById("place-lat").value);
  const lng = Number.parseFloat(document.getElementById("place-lng").value);
  const features = document.getElementById("place-features").value.trim();
  const tags = collectPlaceTags();

  if (!name || !category || !Number.isFinite(lat) || !Number.isFinite(lng)) {
    setStatus("place-form-status", "Name, category, latitude, and longitude are required.", true);
    return;
  }

  const attributes = buildAttributesFromFeatures(features);
  const place = {
    id: `place-${Date.now()}`,
    name,
    category,
    address: address || "User-added Alatau place",
    distance: "Live",
    x: "50%",
    y: "50%",
    lat,
    lng,
    confidence: 84,
    tags: tags.length > 0 ? tags : ["mobility-support"],
    description: `${category} added from the live Alatau map database.`,
    attributes: attributes.length > 0 ? attributes : ["Step-free information pending"],
    optional: ["Added by community database"],
    lastMeters: [
      "Open the live map and check the exact entrance side before arrival.",
      "Use the marker popup for the most recent community updates.",
    ],
    routeNote: "This place was added from the local database and can be refined with future reports.",
    trust: ["Verified by community"],
  };

  try {
    await savePlaceToDatabase(place);
    setStatus("place-form-status", `${name} saved to the database.`, false);
    setStatus("db-status", `${name} added to the live Alatau map.`, false);
    state.selectedPlaceId = place.id;
    state.mapFocus = { type: "place", id: place.id };
    event.target.reset();
    render();
  } catch (error) {
    setStatus("place-form-status", `Place save failed: ${error.message}`, true);
  }
}

function captureMapCenter() {
  const map = ensureLeafletMap();
  if (!map) {
    setStatus("place-form-status", "Leaflet is not available, so map center cannot be captured.", true);
    return;
  }

  const center = map.getCenter();
  document.getElementById("place-lat").value = center.lat.toFixed(6);
  document.getElementById("place-lng").value = center.lng.toFixed(6);
  setStatus("place-form-status", "Map center copied into latitude and longitude.", false);
}

function findNearestAccessiblePlace() {
  if (!state.userLocation) {
    setStatus("db-status", "Use Find my location first to calculate the nearest accessible place.", true);
    return;
  }

  const visiblePlaces = getVisiblePlaces().filter((place) => typeof place.lat === "number" && typeof place.lng === "number");
  if (visiblePlaces.length === 0) {
    setStatus("db-status", "No visible places are available for nearest-place search.", true);
    return;
  }

  const nearest = [...visiblePlaces]
    .map((place) => ({
      place,
      distanceKm: haversineDistance(state.userLocation.lat, state.userLocation.lng, place.lat, place.lng),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)[0];

  selectPlace(nearest.place.id, false);
  setStatus("db-status", `Nearest place: ${nearest.place.name} (${formatDistanceKm(nearest.distanceKm)}).`, false);
  document.querySelector("#map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function locateUser() {
  if (!navigator.geolocation) {
    setStatus("db-status", "Geolocation is not supported in this browser.", true);
    return;
  }

  setStatus("db-status", "Searching for your location...", false);
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      render();
      const map = ensureLeafletMap();
      if (map) {
        map.flyTo([state.userLocation.lat, state.userLocation.lng], 15, { duration: 0.7 });
      }
      setStatus("db-status", "Current location found and added to the map.", false);
    },
    (error) => {
      setStatus("db-status", `Location error: ${error.message}`, true);
    },
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

async function exportDatabase() {
  try {
    const [storedPlaces, storedHazards] = await Promise.all([
      getAllFromStore(DB_STORES.places),
      getAllFromStore(DB_STORES.hazards),
    ]);
    const payload = {
      exportedAt: new Date().toISOString(),
      places: storedPlaces,
      hazards: storedHazards,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "alatau-accessibility-data.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus("db-status", "Database exported to JSON.", false);
  } catch (error) {
    setStatus("db-status", `Export failed: ${error.message}`, true);
  }
}

function addAssistantMessage(role, text) {
  state.chatMessages.push({ role, text });
}

function getAssistantGreeting() {
  const place = getPlaceById(state.selectedPlaceId);
  const userName = state.currentUser ? state.currentUser.name : "guest";
  return `Hello, ${userName}. I can help with routes, accessible places, barriers, and profile-based advice. Current focus: ${place.name}.`;
}

async function buildAssistantReply(question) {
  const text = normalizeText(question);
  const place = getPlaceById(state.selectedPlaceId);
  const visiblePlaces = getVisiblePlaces();
  const topPlace = visiblePlaces[0];
  const nearbyHazards = state.hazards.filter((hazard) => hazard.placeId === place.id);

  if (text.includes("route") || text.includes("добрат") || text.includes("маршрут")) {
    await buildRouteToSelectedPlace();
    if (!state.route) {
      return "I could not build a route yet. Please allow location access or try again.";
    }
    return `Route to ${state.route.placeName}: ${state.route.distanceText}, about ${state.route.durationText}. ${state.route.note}`;
  }

  if (text.includes("nearest") || text.includes("closest") || text.includes("ближай")) {
    if (!state.userLocation) {
      return "Turn on Find my location first, then I can calculate the nearest accessible place.";
    }
    const nearest = [...visiblePlaces]
      .map((candidate) => ({
        candidate,
        distanceKm: haversineDistance(state.userLocation.lat, state.userLocation.lng, candidate.lat, candidate.lng),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm)[0];
    return `The nearest visible place is ${nearest.candidate.name}, about ${formatDistanceKm(nearest.distanceKm)} away.`;
  }

  if (text.includes("profile") || text.includes("о себе") || text.includes("my data")) {
    if (!state.currentUser) {
      return "You are not signed in yet. Register in the welcome card to save your name, needs, and profile notes.";
    }
    return `${state.currentUser.name}, your saved needs are ${(state.currentUser.tags || []).map((tag) => audienceLabels[tag] || tag).join(", ")}. Note: ${state.currentUser.about || "No note saved."}`;
  }

  if (text.includes("hazard") || text.includes("problem") || text.includes("препят") || text.includes("опас")) {
    return nearbyHazards.length > 0
      ? `There are ${nearbyHazards.length} active hazards near ${place.name}: ${nearbyHazards.map((hazard) => hazard.title).join(", ")}.`
      : `There are no active hazards linked to ${place.name} right now.`;
  }

  if (text.includes("best") || text.includes("recommend") || text.includes("луч")) {
    return topPlace
      ? `Best current match is ${topPlace.name}. It fits your selected needs and has a score of ${scorePlace(topPlace)}.`
      : "I do not see a matching place right now.";
  }

  if (text.includes("ramp") || text.includes("elevator") || text.includes("пандус") || text.includes("лифт")) {
    const accessibility = place.attributes.filter((attribute) =>
      normalizeText(attribute).includes("ramp") ||
      normalizeText(attribute).includes("elevator") ||
      normalizeText(attribute).includes("step-free"),
    );
    return accessibility.length > 0
      ? `${place.name} accessibility notes: ${accessibility.join(", ")}.`
      : `${place.name} does not currently list ramp or elevator details in the saved data.`;
  }

  return `Current focus is ${place.name}. I can help with route, nearest place, hazards, your profile, or recommend the best place for your needs.`;
}

function renderAssistant() {
  const thread = document.getElementById("assistant-thread");
  if (!thread) return;

  if (state.chatMessages.length === 0) {
    addAssistantMessage("assistant", getAssistantGreeting());
  }

  thread.innerHTML = state.chatMessages
    .map(
      (message) => `
        <article class="assistant-message ${message.role}">
          <strong>${message.role === "user" ? "You" : "Assistant"}</strong>
          <p>${message.text}</p>
        </article>
      `,
    )
    .join("");

  thread.scrollTop = thread.scrollHeight;
}

async function handleAssistantSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("assistant-input");
  const question = input.value.trim();
  if (!question) {
    return;
  }

  addAssistantMessage("user", question);
  input.value = "";
  renderAssistant();

  const reply = await buildAssistantReply(question);
  addAssistantMessage("assistant", reply);
  renderAssistant();
}

function bindAdminButtons() {
  const approve = document.getElementById("approve-claim-button");
  const proof = document.getElementById("request-proof-button");
  const status = document.getElementById("admin-status");

  approve.addEventListener("click", () => {
    approve.disabled = true;
    proof.disabled = true;
    status.textContent = "Venue claim approved.";
  });

  proof.addEventListener("click", () => {
    proof.disabled = true;
    status.textContent = "Proof request sent to the venue.";
  });
}

function render() {
  renderAuthState();
  renderProfileTags();
  renderProfileSummary();
  renderMapFilters();
  renderMap();
  renderRouteSummary();
  renderMapInspector();
  renderResults();
  renderPlaceCard();
  renderHazards();
  renderEmergencyState();
  renderUserProfilePanel();
  renderAssistant();
}

function bindEvents() {
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("confirm-auth-button").addEventListener("click", handleConfirmAuth);
  document.getElementById("demo-user-button").addEventListener("click", handleDemoUser);
  document.getElementById("logout-button").addEventListener("click", handleLogout);
  document.getElementById("search-form").addEventListener("submit", handleSearchSubmit);
  document.getElementById("save-profile").addEventListener("click", handleSaveProfile);
  document.getElementById("hazard-form").addEventListener("submit", handleHazardSubmit);
  document.getElementById("place-form").addEventListener("submit", handlePlaceSubmit);
  document.getElementById("assistant-form").addEventListener("submit", handleAssistantSubmit);
  document.getElementById("emergency-toggle").addEventListener("click", () => handleEmergencyToggle());
  document.getElementById("locate-me").addEventListener("click", locateUser);
  document.getElementById("nearest-place").addEventListener("click", findNearestAccessiblePlace);
  document.getElementById("build-route").addEventListener("click", () => {
    buildRouteToSelectedPlace().catch((error) => setStatus("db-status", `Route failed: ${error.message}`, true));
  });
  document.getElementById("clear-route").addEventListener("click", clearRoute);
  document.getElementById("export-db").addEventListener("click", exportDatabase);
  document.getElementById("capture-map-center").addEventListener("click", captureMapCenter);
  document.getElementById("reload-db").addEventListener("click", () => {
    reloadDatabaseData().catch((error) => setStatus("db-status", `Reload failed: ${error.message}`, true));
  });

  document.getElementById("replay-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "blind-friendly library with tactile guidance";
    state.selectedTags = ["blind-support", "deaf-support"];
    state.mapAudience = "blind-support";
    saveSelectedTags();
    setQuery("blind-friendly library with tactile guidance");
    selectPlace("tactile-library", false);
  });

  document.getElementById("start-demo").addEventListener("click", () => {
    document.getElementById("search-input").value = "accessible clinic with elevator and braille signage";
    state.selectedTags = ["mobility-support", "blind-support"];
    state.mapAudience = "all";
    saveSelectedTags();
    setQuery("accessible clinic with elevator and braille signage");
    selectPlace("clinic-sunrise", false);
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("escalate-button").addEventListener("click", () => {
    if (!state.emergencyMode) handleEmergencyToggle(true);
    document.querySelector("#support").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  bindAdminButtons();
}

async function bootstrapApp() {
  bindEvents();
  await initializeDatabase();
  applyCurrentUserToState();
  setQuery(document.getElementById("search-input").value);
  render();
}

bootstrapApp();
