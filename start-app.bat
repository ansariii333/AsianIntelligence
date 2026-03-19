@echo off
setlocal
cd /d "%~dp0"
echo Starting Alatau Smart app on http://127.0.0.1:8080
"C:\xampp\php\php.exe" -S 127.0.0.1:8080 -t "%~dp0"
