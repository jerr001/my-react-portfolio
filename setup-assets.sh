#!/bin/bash

# Setup script for React Portfolio
# This script copies all necessary assets to the public folder

echo "Setting up React Portfolio..."

# Create directories if they don't exist
mkdir -p public/images
mkdir -p public/docs

# Copy images
echo "Copying images..."
cp -r ../images/* public/images/ 2>/dev/null || echo "No images folder found in parent directory"

# Copy documents
echo "Copying documents..."
cp -r ../docs/* public/docs/ 2>/dev/null || echo "No docs folder found in parent directory"

# Copy agency folder
echo "Copying agency folder..."
cp -r ../agency public/ 2>/dev/null || echo "No agency folder found in parent directory"

# Copy individual graphic design files
echo "Copying graphic design files..."
cp ../hotel.png public/ 2>/dev/null || echo "hotel.png not found"
cp ../bizcard-front.jpg public/ 2>/dev/null || echo "bizcard-front.jpg not found"
cp ../bizcard-back.jpg public/ 2>/dev/null || echo "bizcard-back.jpg not found"
cp ../Graphic-01.jpg public/ 2>/dev/null || echo "Graphic-01.jpg not found"
cp ../Graphic-02.jpg public/ 2>/dev/null || echo "Graphic-02.jpg not found"

echo ""
echo "Setup complete! Now run:"
echo "  npm install"
echo "  npm start"
echo ""
