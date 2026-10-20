# PowerShell Deployment Script for Next.js + Convex + Better Auth

Write-Host "Starting deployment process..." -ForegroundColor Green

# Navigate to project directory
Set-Location "C:\Users\ABDULLAH\jobs-application-tracker"

# Check git status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status

# Create .gitignore if needed
$gitignoreContent = @"
# Dependencies
node_modules
**/node_modules

# Next.js
.next/
out/
/build

# Production
.env.local
.env.*.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.tsbuildinfo

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel

# Convex
convex.db
*.convex

# IDE
.vscode/
.idea/

# Logs
logs
*.log
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent

# Add all files
Write-Host "Staging files..." -ForegroundColor Yellow
git add .

# Show what will be committed
Write-Host "Files to be committed:" -ForegroundColor Yellow
git status --short

# Commit
$commitMessage = @"
feat: Add sessions table for Better Auth and project setup

- Added sessions table to Convex schema for Better Auth session management
- Configured Better Auth with Convex adapter including email/password auth
- Added .gitignore for project
- Added deployment documentation

Co-Authored-By: Claude Code <noreply@anthropic.com>
"@

Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Make sure to replace YOUR_USERNAME with your actual GitHub username!" -ForegroundColor Yellow
Write-Host "`nCommands to run:" -ForegroundColor Cyan
Write-Host "gh repo create YOUR_USERNAME/jobs-application-tracker --public --push" -ForegroundColor White
Write-Host "or" -ForegroundColor White
Write-Host "git remote add origin https://github.com/YOUR_USERNAME/jobs-application-tracker.git" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White

Write-Host "`nDeployment complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: gh repo create YOUR_USERNAME/jobs-application-tracker --public --push" -ForegroundColor White
Write-Host "2. Run: vercel --prod" -ForegroundColor White
Write-Host "3. Run: npx convex deploy" -ForegroundColor White