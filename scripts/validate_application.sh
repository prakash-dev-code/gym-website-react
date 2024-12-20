#!/bin/bash
echo "Validating the application..."
curl -f http://localhost:8080 || exit 1
