@echo off
setlocal

cd /d "%~dp0"

echo.
echo Building the GitHub Pages site...
set "GITHUB_PAGES=true"
call npm.cmd run build
if errorlevel 1 goto :build_failed
set "GITHUB_PAGES="

echo.
echo Staging changes...
git add -A
git diff --cached --quiet
if not errorlevel 1 goto :no_changes

set "commit_message=%~1"
if "%commit_message%"=="" set "commit_message=Update portfolio site"

echo.
echo Creating commit...
git commit -m "%commit_message%"
if errorlevel 1 goto :git_failed

echo.
echo Publishing to GitHub Pages...
git push origin main
if errorlevel 1 goto :git_failed

echo.
echo Published. GitHub Pages will update in a minute or two.
goto :done

:no_changes
echo.
echo No changes to publish.
goto :done

:build_failed
echo.
echo Build failed. Nothing was published.
goto :failed

:git_failed
echo.
echo Git could not publish the site. Check your GitHub sign-in and try again.
goto :failed

:failed
endlocal
exit /b 1

:done
endlocal
exit /b 0
