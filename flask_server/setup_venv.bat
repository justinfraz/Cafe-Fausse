@echo off
REM ==========================
REM Flask_server setup script
REM Creates venv and installs pytest, pytest-flask
REM ==========================

echo [1/4] Checking Python installation...

REM Try python, then py
where python >nul 2>nul
if %ERRORLEVEL% neq 0 (
    where py >nul 2>nul
    if %ERRORLEVEL% neq 0 (
        echo ❌ Python is not installed or not on PATH.
        echo    Please install from https://www.python.org/downloads/ and re-run this script.
        pause
        exit /b 1
    ) else (
        set PYTHON=py
    )
) else (
    set PYTHON=python
)

echo [2/4] Creating virtual environment 'venv'...

%PYTHON% -m venv venv

if %ERRORLEVEL% neq 0 (
    echo ❌ Failed to create virtual environment.
    pause
    exit /b 1
)

echo [3/4] Activating venv...

call venv\Scripts\activate

echo [4/4] Installing dev dependencies...

pip install --upgrade pip
pip install pytest pytest-flask

echo.
echo ✅ Setup complete!
echo Run the following to start your venv next time:
echo.
echo     venv\Scripts\activate
echo.
echo Then run:
echo.
echo     pytest -q
echo.
pause
