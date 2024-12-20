#!/bin/bash
echo "Starting the React application..."
cd /var/www/gym-website-react/build
npx http-server -p 8080 &
