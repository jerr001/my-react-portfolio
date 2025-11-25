@echo off
REM Setup script for React Portfolio
REM This script copies all necessary assets to the public folder

echo Setting up React Portfolio...

REM Create directories if they don't exist
if not exist "public\images" mkdir "public\images"
if not exist "public\docs" mkdir "public\docs"

REM Copy images
echo Copying images...
xcopy /E /I /Y "..\images" "public\images" 2>nul || echo No images folder found in parent directory

REM Copy documents
echo Copying documents...
xcopy /E /I /Y "..\docs" "public\docs" 2>nul || echo No docs folder found in parent directory

REM Copy agency folder
echo Copying agency folder...
xcopy /E /I /Y "..\agency" "public\agency" 2>nul || echo No agency folder found in parent directory

REM Copy individual graphic design files
echo Copying graphic design files...
copy "..\hotel.png" "public\" 2>nul || echo hotel.png not found
copy "..\bizcard-front.jpg" "public\" 2>nul || echo bizcard-front.jpg not found
copy "..\bizcard-back.jpg" "public\" 2>nul || echo bizcard-back.jpg not found
copy "..\Graphic-01.jpg" "public\" 2>nul || echo Graphic-01.jpg not found
copy "..\Graphic-02.jpg" "public\" 2>nul || echo Graphic-02.jpg not found

echo.
echo Setup complete! Now run:
echo   npm install
echo   npm start
echo.
pause
