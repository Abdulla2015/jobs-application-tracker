# Final Deployment Instructions

## What Has Been Done:

1. ✅ Added `sessions` table to Convex schema for Better Auth
2. ✅ Verified auth configuration in `lib/server/auth.ts`
3. ✅ Initialized Convex project with dev deployment
4. ✅ Created prod deployment on Convex
5. ✅ Updated `convex.json` with new URL

## What's Left to Do:

### Step 1: Install dependencies
```powershell
cd C:\Users\ABDULLAH\jobs-application-tracker
npm install
```

### Step 2: Commit the changes
```powershell
git add .
git commit -m "fix: Update Convex config and add convex dependency

- Updated convex.json with new deployment URL
- Added convex to package.json dependencies
- Sessions table already added for Better Auth

Co-Authored-By: Claude Code <noreply@anthropic.com>"

git push
```

### Step 3: Deploy to Vercel
```powershell
vercel --prod
```

When prompted:
- Link to existing project: No (or Yes if you've created it already)
- Set up and deploy: Yes
- Environment variables to add:

| Name | Value |
|------|-------|
| CONVEX_URL | https://earnest-rat-517.convex.cloud |
| BETTER_AUTH_SECRET | [generate random secret] |
| NEXTAUTH_SECRET | [generate random secret] |
| NEXTAUTH_URL | https://your-vercel-app.vercel.app |

### Step 4: Verify Your App

Your app is now deployed with:
- **GitHub**: https://github.com/Abdulla2015/jobs-application-tracker
- **Convex**: https://earnest-rat-517.convex.cloud
- **Vercel**: Will be provided after `vercel --prod`

## Testing Auth

The Better Auth session table is now properly set up. Your app can:
- Register users with email/password
- Create sessions that store in Convex database
- Handle session expiration

## Notes

- The `job_tracker_key` you mentioned should be the `CONVEX_DEPLOYMENT_KEY` from your Convex dashboard
- The `.env.local` file was created automatically by `npx convex init` with the correct values