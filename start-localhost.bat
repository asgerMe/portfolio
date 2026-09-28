@echo off
setlocal

cd /d "%~dp0"
echo.
echo Starting the portfolio locally...
echo Open http://localhost:3000/ in your browser.
echo Press Ctrl+C in this window to stop the server.
echo.

call npm.cmd run dev -- --host 127.0.0.1 --port 3000
if errorlevel 1 (
  echo.
  echo The local server could not start. See the error above.
  pause
  exit /b 1
)

endlocal
