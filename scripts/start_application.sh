#!/bin/bash

# Exit script on any error
set -e

# Log script progress
echo "Starting the React application deployment process..."

# Define project directory
PROJECT_DIR="/var/www/gym-website-react"

# Ensure we are in the correct project directory
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Project directory $PROJECT_DIR does not exist."
    exit 1
fi

cd "$PROJECT_DIR"

# Install dependencies
echo "Installing Node.js dependencies..."
npm install

# Build the React application
echo "Building the React application..."
npm run build

# Install PM2 if not already installed
if ! pm2 --version >/dev/null 2>&1; then
    echo "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Create a Node.js server script if not exists
SERVER_FILE="$PROJECT_DIR/server.js"
if [ ! -f "$SERVER_FILE" ]; then
    echo "Creating Node.js server script..."
    cat <<EOL > $SERVER_FILE
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route for handling React Router
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
});
EOL
fi

# Start the application with PM2
echo "Starting the application with PM2..."
pm2 start server.js --name gym-website-react
pm2 save

# Restart NGINX to serve the application
echo "Restarting NGINX to apply the configuration..."
sudo systemctl restart nginx

echo "React application deployed successfully."

