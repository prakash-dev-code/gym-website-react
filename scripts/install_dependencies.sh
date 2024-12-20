#!/bin/bash

# Exit script on any error
set -e

# Install Node.js 18 if not installed
if ! command -v node &> /dev/null || [[ "$(node -v)" != v18* ]]; then
    echo "Installing Node.js 18..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js 18 is already installed."
fi

# Install dependencies and build the React application
echo "Installing dependencies and building the application..."
cd /var/www/react-gym-website
npm install
npm run build
