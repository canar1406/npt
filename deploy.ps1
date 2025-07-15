Write-Host "🚀 Deploying to Heroku..." -ForegroundColor Green

# Add all changes
git add .

# Commit changes
git commit -m "Update search functionality and auto-indexing"

# Push to heroku
git push heroku main

Write-Host "✅ Deployment complete!" -ForegroundColor Green

# Scale worker dyno
heroku ps:scale worker=1

Write-Host "✅ Auto-indexing worker started!" -ForegroundColor Green

# Show logs
heroku logs --tail
