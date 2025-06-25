#!/bin/bash
set -e

echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "Installing dependencies..."
npm install

echo "Running build..."
npm run build

echo "Build completed. Checking dist directory..."
ls -la dist/

echo "Build script finished successfully!" 