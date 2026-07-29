@echo off
REM ===================================================================
REM  Double-click this to pull down the latest changes from Claude,
REM  then start the site. Requires Git (https://git-scm.com/download/win)
REM  or GitHub Desktop to have cloned this folder.
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

echo   Fetching the latest changes...
git pull origin claude/website-project-3zxsbo
if errorlevel 1 (
  echo.
  echo   Could not update. Send the message above to Claude.
  pause
  exit /b 1
)

echo   Updating the site's pieces...
call npm.cmd install

echo.
echo   Done. Starting the site...
start "" http://localhost:3000
call npm.cmd run dev
pause
