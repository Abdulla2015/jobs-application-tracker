# Deployment Guide

## Vercel Deployment

### 1. Environment Variables

Create `.env.local` file in the root directory with the following variables:

```bash
# Convex
CONVEX_DEPLOYMENT_KEY=your_convex_deployment_key
CONVEX_URL=https://jobs-tracker-cvxgxtvax.convex.app

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_DOMAIN=localhost

# NextAuth (if using)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 2. GitHub Repository Setup

If you haven't created a repository yet:

```bash
# Create a new repository on GitHub first, then:
gh repo create YOUR_USERNAME/YOUR_REPO_NAME --public
```

### 3. Push to GitHub

```bash
# Initialize git if needed
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Next.js + Convex + Better Auth setup with sessions table"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# For development deployment on Vercel
vercel
```

#### Option B: Using GitHub Integration

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

### 5. Convex Database Setup

#### For Local Development

```bash
# Install Convex CLI
npm i -g convex

# Initialize Convex (if not already)
npx convex init

# Run Convex functions locally
npx convex dev
```

#### For Production Deployment

```bash
# Deploy Convex functions
npx convex deploy

# This will set up the production database on Convex
```

### 6. Environment Variables for Vercel

In your Vercel dashboard:

1. Go to your project
2. Click on "Settings" → "Environment Variables"
3. Add the following variables:

For **Production** and **Preview** environments:

```
CONVEX_DEPLOYMENT_KEY=your_convex_deployment_key
CONVEX_URL=https://jobs-tracker-cvxgxtvax.convex.app
BETTER_AUTH_SECRET=your_better_auth_secret_key
BETTER_AUTH_URL=https://your-vercel-project-url.vercel.app
BETTER_AUTH_DOMAIN=your-vercel-project-url.vercel.app
```

### 7. Deployment Commands Summary

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Deploy Convex to production
npx convex deploy

# 4. Deploy to Vercel (production)
vercel --prod

# 5. Deploy to Vercel (preview)
vercel

# 6. Or use npm scripts
npm run build
npm run start
```

### 8. Verify Deployment

After deployment:
1. Visit your Vercel URL
2. Check the console for any errors
3. Verify that the Better Auth session table is being used correctly
4. Test authentication flows