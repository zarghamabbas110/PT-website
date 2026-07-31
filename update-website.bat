@echo off
REM ===================================================================
REM  Double-click this to pull down the latest changes from Claude,
REM  then start the site. Requires Git (https://git-scm.com/download/win)
REM  or GitHub Desktop to have cloned this folder.
REM
REM  It also clears the build cache. Next.js remembers the old shape of
REM  the site in a hidden ".next" folder, and when an update adds new
REM  pages that stale memory serves "404 - page not found" for them.
REM  Deleting it costs a few seconds on the next start and prevents it.
REM ===================================================================
title PhysioFlow - update
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo   Git is not installed, so this folder cannot update itself.
  echo   Either install Git from https://git-scm.com/download/win
  echo   or use GitHub Desktop and press "Pull origin" there.
  echo.
  pause
  exit /b 1
)

echo   Making sure you are on the right branch...
git checkout claude/website-project-3zxsbo
if errorlevel 1 (
  echo.
  echo   Could not switch branch. Send the message above to Claude.
  pause
  exit /b 1
)

echo   Fetching the latest changes...
git pull origin claude/website-project-3zxsbo
if errorlevel 1 (
  echo.
  echo   Could not update. Send the message above to Claude.
  pause
  exit /b 1
)

echo   Clearing the old build cache...
if exist ".next" rmdir /s /q ".next"

echo   Updating the site's pieces...
call npm.cmd install

echo.
echo   Done. Starting the site...
echo   The first page load after an update takes longer than usual.
start "" http://localhost:3000
call npm.cmd run dev
pause
