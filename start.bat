@echo off
echo ========================================
echo   Jeremiah Obembe React Portfolio
echo   Quick Start Script
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/3] Installing dependencies...
    echo This may take a few minutes on first run...
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies
        echo Please make sure Node.js is installed
        pause
        exit /b 1
    )
    echo.
) else (
    echo [1/3] Dependencies already installed, skipping...
    echo.
)

REM Check if public/images exists
if not exist "public\images\" (
    echo [2/3] Setting up assets...
    echo Running asset setup script...
    call setup-assets.bat
    echo.
) else (
    echo [2/3] Assets already set up, skipping...
    echo.
)

echo [3/3] Starting development server...
echo.
echo Your portfolio will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

call npm start
