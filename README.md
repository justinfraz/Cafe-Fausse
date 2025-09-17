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
