# Final Deployment Steps

## Step 1: Commit the fixed vercel.json
```powershell
cd C:\Users\ABDULLAH\jobs-application-tracker
git add .
git commit -m "fix: Remove conflicting vercel.json properties

- Fixed vercel.json to work with monorepo setup
- Removed functions property that conflicted with builds

Co-Authored-By: Claude Code <noreply@anthropic.com>"

git push
```

## Step 2: Deploy to Vercel
```powershell
vercel --prod
```

When prompted:
1. **Name?** Press Enter for: `jobs-application-tracker`
2. **Directory?** Enter: `job-application-tracker` (THIS IS KEY)
3. **Link?** `No` (or select existing project if prompted)
4. **Build Command?** `next build`
5. **Output Directory?** `.next`
6. **Root Directory?** `job-application_tracker`

## Step 3: Set Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables

Add these variables:

| Name | Value |
|------|-------|
| `CONVEX_URL` | `https://earnest-rat-517.convex.cloud` |
| `BETTER_AUTH_SECRET` | Generate at https://www.uuidgenerator.net/ |
| `NEXTAUTH_SECRET` | Generate at https://www.uuidgenerator.net/ |
| `NEXTAUTH_URL` | Will auto-fill to `https://your-project.vercel.app` |
| `BETTER_AUTH_URL` | Will auto-fill |

## Step 4: Redeploy (if needed)
After setting environment variables, click "Redeploy" in Vercel dashboard.

## Your Deployment URLs:

- **GitHub**: https://github.com/Abdulla2015/jobs-application-tracker
- **Convex**: https://dashboard.convex.dev/d/earnest-rat-517
- **Vercel**: Will be provided after deployment

## Summary:

✅ Convex schema updated with sessions table
✅ GitHub repo pushed
✅ Convex deployed
✅ Vercel configuration ready
✅ Environment variables need to be set
✅ Ready for deployment