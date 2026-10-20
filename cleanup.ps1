# Cleanup script for monorepo fix

cd C:\Users\ABDULLAH\jobs-application-tracker

# Remove the old directory
if (Test-Path "job-application-tracker") {
    Remove-Item -Path "job-application-tracker" -Recurse -Force
    Write-Host "Removed job-application-tracker directory" -ForegroundColor Green
}

Write-Host "Cleanup complete!" -ForegroundColor Green