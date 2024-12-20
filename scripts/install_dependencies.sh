#!/bin/bash
echo "Installing dependencies and building the application..."
cd /var/www/react-gym-website
cp -R ./ /var/www/react-gym-website
npm install
npm run build

