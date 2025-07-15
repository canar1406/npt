#!/bin/bash

echo "🚀 Deploying to Heroku..."

# Add all changes
git add .

# Commit changes
git commit -m "Update search functionality and auto-indexing"

# Push to heroku
git push heroku main

echo "✅ Deployment complete!"

# Scale worker dyno
heroku ps:scale worker=1

echo "✅ Auto-indexing worker started!"

# Show logs
heroku logs --tail
