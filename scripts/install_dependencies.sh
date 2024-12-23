#!/bin/bash

set -e
LOG_FILE="/var/log/install_dependencies.log"

exec > >(tee -i $LOG_FILE)
exec 2>&1

echo "Script started at $(date)"

TARGET_DIR="/var/www/gym-website-react"
DEPLOYMENT_DIR=$(pwd)

echo "Ensuring target directory exists..."
mkdir -p $TARGET_DIR

echo "Checking if source and target directories are the same..."
if [ "$DEPLOYMENT_DIR" != "$TARGET_DIR" ]; then
    echo "Copying application files to $TARGET_DIR..."
    cp -R $DEPLOYMENT_DIR/* $TARGET_DIR
else
    echo "Source and target directories are the same. Skipping copy."
fi

echo "Navigating to $TARGET_DIR..."
cd $TARGET_DIR

echo "Installing dependencies with memory limit..."
NODE_OPTIONS="--max-old-space-size=512" npm ci --production || { echo "npm install failed"; exit 1; }

echo "Building the application..."
npm run build -- --mode production || { echo "npm build failed"; exit 1; }

echo "Script completed successfully at $(date)"
