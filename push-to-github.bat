@echo off
cd /d "d:\portfolio01-main (1)\portfolio01-main"
echo ==============================================
echo Pushing Jeseer-QS-Portfolio to GitHub...
echo Repository: https://github.com/mohamedjaseer/Jeseer-QS-Portfolio
echo ==============================================
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ==============================================
    echo SUCCESS! All files uploaded to GitHub.
    echo ==============================================
) else (
    echo ==============================================
    echo Push paused or authentication needed.
    echo If prompted, enter your GitHub Username and Personal Access Token (PAT).
    echo ==============================================
)
pause
