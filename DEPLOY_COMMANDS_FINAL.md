# Deployment Commands for PowerShell

## Run These Commands in Order:

```powershell
# 1. Navigate to project
cd C:\Users\ABDULLAH\jobs-application-tracker

# 2. Install dependencies
npm install

# 3. Commit Convex config updates
git add .
git commit -m "chore: Update Convex deployment configuration

- Added sessions table for Better Auth session management
- Updated convex.json with prod deployment URL: https://earnest-rat-517.convex.cloud
- Added convex to package.json dependencies for CLI support

Co-Authored-By: Claude Code <noreply@anthropic.com>"

git push
```

## Environment Variables for Vercel

In Vercel Dashboard → Project → Settings → Environment Variables:

**Production Environment:**
```
CONVEX_URL = https://earnest-rat-517.convex.cloud
job_tracker_key = [your existing key]
BETTER_AUTH_SECRET = [generate at https://www.uuidgenerator.net/version4]
NEXTAUTH_SECRET = [generate at https://www.uuidgenerator.net/version4]
NEXTAUTH_URL = https://[your-vercel-project].vercel.app
BETTER_AUTH_URL = https://[your-vercel-project].vercel.app
BETTER_AUTH_DOMAIN = [your-vercel-project].vercel.app
```

## Final Vercel Deployment:

```powershell
vercel --prod
```

## Checklist:

- ✅ GitHub repository created and pushed
- ✅ Convex dev deployment created: neat-sardine-872
- ✅ Convex production deployment: earnest-rat-517.convex.cloud
- ⏳ npm install dependencies
- ⏳ Commit updates
- ⏳ Deploy to Vercel
- ⏳ Set environment variables in Vercel dashboard
- ⏳ Verify deployment

## Your App URLs:

- **GitHub**: https://github.com/Abdulla2015/jobs-application-tracker
- **Convex Dashboard**: https://dashboard.convex.dev/d/earnest-rat-517
- **Vercel**: Will be provided after `vercel --prod`