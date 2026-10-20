# GitHub Setup and Push Guide

## Using gh CLI

Since you mentioned you're already logged in with the gh CLI, here are the commands:

### 1. Create and push to a new GitHub repository

```bash
# Create a new repository on GitHub (without pushing)
gh repo create jobs-application-tracker --public --description "Next.js + Convex + Better Auth job application tracker"

# Add all files
git add .
git commit -m "Initial commit: Setup Next.js + Convex + Better Auth with sessions table"

# Push to GitHub
gh repo set-default
git push -u origin main
```

Alternatively:

```bash
# Create repository and push in one command
gh repo create jobs-application-tracker --public --push
```

### 2. If repository already exists

```bash
# Set up remote (if not already set)
git remote add origin https://github.com/YOUR_USERNAME/jobs-application-tracker.git

# Push
git push -u origin main
```

### 3. GitHub CLI authentication

If you're already logged in (which you mentioned you are):

```bash
# Verify authentication
gh auth status

# List your repositories
gh repo list YOUR_USERNAME

# Check current repository
gh repo view
```

### 4. Create repository with specific settings

```bash
gh repo create jobs-application-tracker \
    --public \
    --description "Next.js project with Convex backend and Better Auth authentication" \
    --homepage "https://your-app-url.vercel.app" \
    --enable-issues \
    --enable-wiki \
    --enable-projects
```

### 5. After pushing to GitHub

Your code is now in GitHub! Next steps:

1. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

2. **Deploy to Convex**
   ```bash
   npx convex deploy
   ```

## Important Notes

### Environment Variables Safety

Never commit environment variables! Make sure your `.env.local` file is in `.gitignore` (it already is).

If you accidentally committed secrets:

```bash
# Remove file from git history
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env.local' \
  --prune-empty --tag-name-filter cat -- --all

# Or reset the commit
git reset --soft HEAD~1
git reset
git add .
git commit -m "Remove secrets from commit"
```

### Git Configuration

Make sure git is configured with your credentials:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Checking Current Status

```bash
# Check git status
git status

# View commits
git log --oneline

# See what files would be pushed
git diff --cached
```