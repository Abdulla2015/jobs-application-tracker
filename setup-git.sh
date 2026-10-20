#!/bin/bash
# Simple script to commit and push to GitHub

echo "Setting up git..."

# Create .gitignore if it doesn't exist
cat > .gitignore << 'gitignore_eof'
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
gitignore_eof

# Add all files
echo "Staging files..."
git add .

# Check what's staged
echo "Checking staged files..."
git status --short

# Commit
echo "Committing..."
git commit -m "feat: Add sessions table for Better Auth and project setup

- Added sessions table to Convex schema for Better Auth session management
- Configured Better Auth with Convex adapter
- Added .gitignore for project

Co-Authored-By: Claude Code <noreply@anthropic.com>"

echo "Done! Next steps:"
echo "1. Create GitHub repo: gh repo create YOUR_USERNAME/YOUR_REPO --public"
echo "2. Add remote: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "3. Push: git push -u origin main"
echo ""
echo "For Convex deployment:"
echo "  npx convex deploy"
echo ""
echo "For Vercel deployment:"
echo "  vercel --prod"