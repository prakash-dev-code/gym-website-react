#!/bin/bash
echo "Installing dependencies and building the application..."
cd /var/www/gym-website-react
cp -R /path/to/source/* .
npm install
npm run build
