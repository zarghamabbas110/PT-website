@echo off
REM ===================================================================
REM  Double-click this file to run the website on your own computer.
REM  It installs anything missing, starts the site, and opens Chrome.
REM  Close the black window when you are finished.
REM ===================================================================
title PhysioFlow - local website
cd /d "%~dp0"

echo.
echo   Starting PhysioFlow...
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo   Node.js is not installed.
  echo   Download the LTS version from https://nodejs.org, install it,
  echo   restart your computer, then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo   First run - downloading the pieces the site needs.
  echo   This takes a few minutes. Warnings are normal.
  echo.
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo   Install failed. Copy the red text above and send it to Claude.
    pause
    exit /b 1
  )
)

echo.
echo   Opening http://localhost:3000 in your browser...
echo   Leave this window open while you browse.
echo   Press Ctrl+C here to stop the site.
echo.

start "" http://localhost:3000
call npm.cmd run dev

pause
