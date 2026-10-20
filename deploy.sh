#!/bin/bash

# Deployment script for Next.js + Convex + Better Auth project
# This script sets up git, commits changes, and pushes to GitHub

set -e

echo "Setting up git repository..."

# Add .gitignore
echo "Creating .gitignore..."
cat > .gitignore << 'EOF'
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
EOF

echo "Staging files..."
git add convex.schema.ts
git add lib/server/auth.ts
git add .gitignore
git add convex.json
git add package.json
git add job-application-tracker/

echo "Committing changes..."
git commit -m "feat: Add sessions table for Better Auth and initial project setup

- Added sessions table to Convex schema for Better Auth session management
- Configured Better Auth with Convex adapter
- Added .gitignore for project

Co-Authored-By: Claude Code <noreply@anthropic.com>"

echo ""
echo "Next steps:"
echo "1. Create a GitHub repository (if not already created)"
echo "2. Add remote origin:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "For Convex deployment:"
echo "1. Run: npx convex deploy"
echo "2. Or use the dev mode: npx convex dev"
echo ""