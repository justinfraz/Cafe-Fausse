Python installation:
--------------------
1. Open your web browser and navigate to the official Python website: python.org.
2. Go to the "Downloads" section.
3. Select the appropriate installer for your operating system (Windows, macOS, or Linux) and system architecture (32-bit or 64-bit). For Windows, choose the "Windows installer (64-bit)" for most modern systems.
4. Locate the downloaded installer file (e.g., python-X.X.X-amd64.exe for Windows) and double-click it to run.
5. Crucially, during the installation process, ensure you check the box that says "Add Python X.X to PATH" (or similar wording). This allows you to run Python commands directly from your terminal or command prompt.
5. You can choose "Install Now" for a default installation or "Customize installation" to select specific features or change the installation location. If customizing, ensure "pip" (Python's package installer) is selected.
6. Follow the on-screen prompts to complete the installation.
7. Grant administrative privileges if prompted.
8. Open a new terminal or command prompt window.
9. Type python --version and press Enter. If Python is installed correctly, its version number will be displayed. If you encounter an error, try python3 --version.

NVM (Node Version Manager) installation:
----------------------------------------
1. Windows: Go to the nvm-windows GitHub repository and download the nvm-setup.exe file for the latest release. Run the installer and follow the on-screen instructions. 
2. Open your terminal: After installing NVM, you may need to open a new terminal session for the command to be recognized. 
3. Verify NVM installation: Type nvm --version to confirm NVM is installed and working. 
4. Install a Node.js version: Choose one of the following commands to install Node.js: 
    Latest LTS (Long-Term Support) version: nvm install lts 
    Latest stable version: nvm install latest 
    A specific version: nvm install <version_number> (e.g., nvm install 20.10.0) 
5. Use the installed version: After installation, switch to the new Node.js version using nvm use <version_number>.
6. Verify the version: Confirm the active Node.js version by running node -v.

PostgreSQL installation:
------------------------
1. Download the Installer: Visit the PostgreSQL downloads page and select the Windows installer. 
2. Run the Installer: Double-click the downloaded .exe file to start the setup wizard. 
3. Directory: Choose an installation location or use the default. 
4. Components: Select the components you want to install, such as the PostgreSQL Server, pgAdmin 4 (GUI management tool), and Command Line Tools. 
5. Data Directory: Specify where the database data will be stored. 
6. Set Superuser Password: Create a password for the PostgreSQL superuser (postgres). 
7. Choose Port: Select the port the server will listen on; the default is 5432. 
8. Locale: Select the locale for your database. 
9. Click Next to finish the installation.








py -m pip install --upgrade pip
py -m pip install virtualenv
py -3 -m venv env
env\Scripts\activate

pip install flask
pip install Flask-SQLAlchemy
pip install Flask-Migrate
pip install Flask-Cors 

set FLASK_APP=app.py
cd Flask-server
flask run

cd Reactjs-client
node -v
npm -v
npm install
npm run dev
