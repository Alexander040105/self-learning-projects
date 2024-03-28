@echo off
set /p "sourceFolder=Enter the path of the source folder to be sorted: "

rem checking the source directory
if not exist "%sourceFolder%" (
    echo Error: The specified source folder does not exist.
    pause
    exit /b
)

rem for item counting on summary
set "docCount=0"
set "imgCount=0"
set "vidCount=0"
set "musicCount=0"
set "appCount=0"



rem create new subdirectories if there's none
if not exist "%sourceFolder%\Documents" mkdir "%sourceFolder%\Documents"
if not exist "%sourceFolder%\Images" mkdir "%sourceFolder%\Images"
if not exist "%sourceFolder%\Videos" mkdir "%sourceFolder%\Videos"
if not exist "%sourceFolder%\Music" mkdir "%sourceFolder%\Music"
if not exist "%sourceFolder%\Apps" mkdir "%sourceFolder%\Apps"

rem Move files to appropriate subdirectories based on their extensions
for %%f in ("%sourceFolder%\*.*") do (
    if /i "%%~xf"==".txt" (
        move "%%f" "%sourceFolder%\Documents"
        set /a "docCount+=1"
    ) else if /i "%%~xf"==".exe" (
        move "%%f" "%sourceFolder%\Apps"
        set /a "appCount+=1"
    ) else if /i "%%~xf"==".jpg" (
        move "%%f" "%sourceFolder%\Images"
        set /a "imgCount+=1"
    ) else if /i "%%~xf"==".mp4" (
        move "%%f" "%sourceFolder%\Videos"
        set /a "vidCount+=1"
    ) else if /i "%%~xf"==".mp3" (
        move "%%f" "%sourceFolder%\Music"
        set /a "musicCount+=1"
    ) else if /i "%%~xf"==".docx" (
        move "%%f" "%sourceFolder%\Documents"
        set /a "docCount+=1"
    ) else if /i "%%~xf"==".png" (
        move "%%f" "%sourceFolder%\Images"
        set /a "imgCount+=1"
    ) else if /i "%%~xf"==".pdf" (
        move "%%f" "%sourceFolder%\Documents"
        set /a "docCount+=1"
    ) else if /i "%%~xf"==".webp" (
        move "%%f" "%sourceFolder%\Images"
        set /a "imgCount+=1"
    ) else if /i "%%~xf"==".zip" (
        move "%%f" "%sourceFolder%\Documents" 
        set /a "docCount+=1"
    ) else if /i "%%~xf"==".ai" (
        move "%%f" "%sourceFolder%\Images"
        set /a "imgCount+=1"
    ) else if /i "%%~xf"==".psd" (
        move "%%f" "%sourceFolder%\Images"
        set /a "imgCount+=1"
    ) else if /i "%%~xf"==".pptx" (
        move "%%f" "%sourceFolder%\Documents"
        set /a "docCount+=1"
    ) else if /i "%%~xf"==".ppt" (
        move "%%f" "%sourceFolder%\Documents"
        set /a "docCount+=1"
    )
)

rem Display the sorting summary
echo Sorting completed. Summary:
echo.
echo Number of .txt/.docx files moved:    %docCount%
echo Number of .jpg/.png files moved:    %imgCount%
echo Number of .mp4 files moved:    %vidCount%
echo Number of .mp3 files moved:    %musicCount%
echo Number of .exe files moved:    %appCount%

pause
