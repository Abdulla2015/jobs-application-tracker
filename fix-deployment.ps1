# PowerShell script to fix Vercel deployment for monorepo

Write-Host "Fixing Vercel deployment..." -ForegroundColor Green

# Move Next.js files from job-application-tracker to root
$cwd = Get-Location
Write-Host "Current directory: $cwd" -ForegroundColor Cyan

# Check if files exist
$jobAppDir = Join-Path $pwd "job-application-tracker"
if (Test-Path $jobAppDir) {
    Write-Host "Moving Next.js files from job-application-tracker to root..." -ForegroundColor Cyan

    # Move all files from job-application-tracker to root
    Get-ChildItem -Path $jobAppDir -File | ForEach-Object {
        $destPath = Join-Path $pwd $_.Name
        if (-not (Test-Path $destPath)) {
            Move-Item -Path $_.FullName -Destination $destPath
            Write-Host "Moved: $($_.Name)"
        }
    }

    # Move directories (except node_modules)
    Get-ChildItem -Path $jobAppDir -Directory | ForEach-Object {
        $destPath = Join-Path $pwd $_.Name
        if (-not (Test-Path $destPath)) {
            Move-Item -Path $_.FullName -Destination $destPath
            Write-Host "Moved directory: $($_.Name)"
        }
    }

    # Clean up vercel.json - remove complex config
    if (Test-Path "vercel.json") {
        Remove-Item "vercel.json" -Force
        Write-Host "Removed vercel.json" -ForegroundColor Yellow
    }

    Write-Host "Files moved successfully!" -ForegroundColor Green
} else {
    Write-Host "job-application-tracker directory not found" -ForegroundColor Red
    exit 1
}

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. git add ." -ForegroundColor White
Write-Host "2. git commit -m 'fix: Move Next.js app to root for Vercel'" -ForegroundColor White
Write-Host "3. git push" -ForegroundColor White
Write-Host "4. Delete old Vercel project and create new one" -ForegroundColor White
Write-Host "5. Redeploy to Vercel" -ForegroundColor White