# Deployment Commands for Next.js + Convex + Better Auth

## Prerequisites
- You've already logged in with `gh auth login` and `vercel login`

## Step 1: Git Setup and Push to GitHub

```powershell
# Navigate to your project directory
cd C:\Users\ABDULLAH\jobs-application-tracker

# Check git status
git status

# Create .gitignore (if not already correct)
# The file should already be correct from our setup

# Stage all files
git add convex.schema.ts
git add lib/server/auth.ts
git add .gitignore
git add convex.json
git add package.json
git add job-application-tracker/
git add DEPLOYMENT.md
git add GITHUB_SETUP.md
git add deploy.sh
git add setup-git.sh

# Commit the changes
git commit -m "feat: Add sessions table for Better Auth and project setup

- Added sessions table to Convex schema for Better Auth session management
- Configured Better Auth with Convex adapter including email/password auth
- Added .gitignore for project
- Added deployment documentation

Co-Authored-By: Claude Code <noreply@anthropic.com>"

# Create GitHub repository (replace YOUR_USERNAME with your actual username)
gh repo create YOUR_USERNAME/jobs-application-tracker --public

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/jobs-application-tracker.git

# Push to GitHub
git push -u origin main
```

## Step 2: Vercel Deployment

```powershell
# Deploy to Vercel production
vercel --prod

# Or for preview deployment (returns a preview URL)
vercel
```

## Step 3: Convex Production Deployment

```powershell
# Deploy Convex functions to production
npx convex deploy
```

## Step 4: Set Environment Variables on Vercel

In Vercel Dashboard → Project → Settings → Environment Variables:

```
NEXTAUTH_SECRET=your-secret-key-here
BETTER_AUTH_SECRET=your-better-auth-secret-here
CONVEX_DEPLOYMENT_KEY=from your Convex dashboard
CONVEX_URL=https://jobs-tracker-cvxgxtvax.convex.app
NEXTAUTH_URL=https://your-vercel-project-url.vercel.app
BETTER_AUTH_URL=https://your-vercel-project-url.vercel.app
BETTER_AUTH_DOMAIN=https://your-vercel-project-url.vercel.app
```

## Complete One-Liner Commands

If you want to do everything in one go:

```powershell
# 1. Set up .gitignore properly
# 2. Stage and commit
git add . && git commit -m "Initial commit: Better Auth + Convex setup" --allow-empty

# 3. Create repo and push
gh repo create YOUR_USERNAME/jobs-application-tracker --public --push

# 4. Deploy to Vercel
vercel --prod

# 5. Deploy Convex
npx convex deploy
```

## Troubleshooting

If you get errors:

1. **Git not initialized**: Run `git init` first
2. **Remote already exists**: Skip the remote add step, or use `git remote set-url origin <url>`
3. **Branch name**: If your default branch is different, replace `main` with `master` or your branch name

## Verify Deployment

After deployment:
1. Visit your Vercel URL
2. Check that the app loads correctly
3. Test authentication by going to `/api/auth/signin`
4. Verify Convex functions are deployed by checking the Convex dashboard