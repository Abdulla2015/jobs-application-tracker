# Vercel Monorepo Deployment Guide

## Issue
Vercel is creating a new project but failing because Next.js is in `job-application-tracker/` subdirectory, not at the root.

## Solutions

### Solution 1: Set Root Directory in Vercel Dashboard

1. Go to: https://vercel.com/abdullah-s-team12/jobs-application-tracker/settings/general
2. Scroll to "Root Directory"
3. Set it to: `job-application-tracker`
4. Redeploy

### Solution 2: Move package.json to root (Recommended)

Create a new package.json at the root:

```json
{
  "name": "jobs-application-tracker",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.5.0"
  }
}
```

### Solution 3: Use vercel.json to specify output directory

Create `vercel.json` at root:

```json
{
  "builds": [
    {
      "src": "job-application-tracker/package.json",
      "dist": "job-application-tracker/.next",
      "env": {
        "NEXTAUTH_SECRET": "@nextauth-secret",
        "BETTER_AUTH_SECRET": "@better-auth-secret",
        "CONVEX_URL": "https://earnest-rat-517.convex.cloud"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "job-application-tracker/$1"
    }
  ],
  "functions": {
    "job-application-tracker/api/**/*.js": {
      "maxDuration": 10
    }
  }
}
```

## Recommended: Move to Root

Currently you have:
- Root: C:\Users\ABDULLAH\jobs-application-tracker
- App: C:\Users\ABDULLAH\jobs-application-tracker\job-application-tracker

Move everything from `job-application-tracker/` to root:

```powershell
# Move files to root
cd C:\Users\ABDULLAH\jobs-application-tracker
ls job-application-tracker | %{ mv $_ . }

# Or use robocopy on Windows
robocopy job-application-tracker . /E

# Remove empty directory
rmdir job-application-tracker
```

Then deploy again:
```powershell
vercel --prod
```

## Environment Variables

Set these in Vercel → Project → Settings → Environment Variables:

| Name | Value |
|------|-------|
| CONVEX_URL | https://earnest-rat-517.convex.cloud |
| BETTER_AUTH_SECRET | Your secret (or leave blank for now) |
| NEXTAUTH_SECRET | Random string |
| NEXTAUTH_URL | Will be auto-filled by Vercel |
| BETTER_AUTH_URL | Will be auto-filled by Vercel |

## Quick Fix

For now, let's set the root directory in the existing project:
1. Go to Vercel Dashboard
2. Find the project `abdulla-s-team12/jobs-application-tracker`
3. Go to Settings → General
4. Set Root Directory to: `job-application-tracker`