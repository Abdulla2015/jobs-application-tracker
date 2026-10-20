# Azure Revisited: Complete Vercel Fix

## The Problem
404 errors because Vercel can't find/build the Next.js app in the subdirectory.

## Solution: Create vercel.json at ROOT correctly

The `vercel.json` at root should be:

```json
{
  "version": 2,
  "functions": {
    "job-application-tracker/**/*.js": {
      "maxDuration": 10
    }
  }
}
```

**NOT** with builds/routes that conflict!

## Step-by-Step Fix:

### 1. Replace vercel.json with simple config:
Delete current vercel.json and create this minimal one at ROOT:

```json
{
  "version": 2
}
```

### 2. In Vercel Dashboard:
- Settings → General → Root Directory = `job-application-tracker`

### 3. Set Environment Variables:
Settings → Environment Variables:
- `CONVEX_URL` = `https://earnest-rat-517.convex.cloud`
- `BETTER_AUTH_SECRET` = your-secret-key
- `NEXTAUTH_SECRET` = your-secret-key

### 4. Redeploy:
Delete the project and recreate, or click "Redeploy"

## Alternative: Move App to Root

If vercel.json approach doesn't work, move Next.js to root:

```powershell
# In PowerShell
cd C:\Users\ABDULLAH\jobs-application-tracker

# Move all Next.js files from subdirectory to root
dir job-application-tracker\*.json          # Check package.json, tsconfig, etc.
dir job-application-tracker\app
dir job-application-tracker\public

# Move them up
mv job-application-tracker\package.json .
mv job-application-tracker\tsconfig.json .
mv job-application-tracker\app app
mv job-application_tracker\public public

# Remove vercel.json (now at root)
rm vercel.json

# Clean directory
rmdir job-application-tracker
```

## Final Commands:

```powershell
git add .
git commit -m "fix: Move app to root or simplify vercel config"
git push
vercel --prod
```

## Test After Deployment:
Visit: `https://jobs-application-tracker.vercel.app`

Should show your app with the updated page.tsx content.