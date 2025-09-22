# Café Fausse

A full-stack web application for **Café Fausse**, built with a Flask backend, React frontend, and PostgreSQL database. Provides a restaurant website with menu browsing, reservations, newsletter signup, and a responsive (mobile + desktop) client.

---

## 🧭 Table of Contents

- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Setup & Installation](#-setup--installation)  
- [Running Locally](#-running-locally)  
- [Running Tests](#-running-tests)  
- [API Endpoints](#-api-endpoints)  
- [Authentication & Security](#-authentication--security)  
- [Deployment](#-deployment)  

---

## ✅ Features

Here are some of the key capabilities of Café Fausse:

- Browse menu categories and items with prices and descriptions  
- Make table reservations (date, time, guest count, etc)  
- Newsletter signup for updates / promotions  
- Responsive UI (mobile, tablet, desktop)  
- Admin-style / protected endpoints (if applicable) for managing reservations, newsletters, etc  
- Input validation and error handling  
- Basic protection against common security issues (e.g. SQL injection, XSS)  

---

## 🛠 Tech Stack

| Layer | Main Tools / Libraries |
|---|---|
| Backend | Flask, SQLAlchemy, Flask-Migrate (or Alembic), PostgreSQL |
| Frontend | React, React Router, fetch/axios (API calls), CSS / SCSS or styled components for responsiveness |
| Testing | pytest for backend, Jest + React Testing Library for frontend, possibly E2E / integration tools like Cypress or Playwright |
| DevOps / Misc | Environment variables (dotenv), CORS support, (optional) Docker / docker-compose for easier setup |

---

## ⚙️ Setup & Installation

These are steps to get the project up and running on your local machine for development / testing.

### Prerequisites

- Python 3.x  
- Node.js / npm (or yarn)  
- PostgreSQL

---

### Backend Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/justinfraz/Cafe-Fausse.git
   cd Cafe-Fausse/Flask-server-merged

2. Create & activate a virtual environment:

py -m venv env
env\Scripts\activate

3. Install dependencies:

pip install -r requirements.txt
pip install -r requirements-dev.txt

---

### Frontend Setup

For both the standard and responsive clients:

1. Navigate to the client folder:

cd Reactjs-client-responsive

2. Install dependencies:

npm install

3. Configure API base URL (if needed):

For example, create .env.local or configure environment variable like REACT_APP_API_URL=http://localhost:5000

---

## ▶️ Running Locally

1. First, start the backend:

cd Flask-server-merged
.\venv\Scripts\activate
cd Flask-server
flask run

(The backend will typically run on http://localhost:5000.)

2. Then, start the frontend:

cd Reactjs-client-responsive
nnpm run dev

Open your browser to http://localhost:3000 (or whatever port React is serving on).

---

## 🔍 Running Tests
Backend
cd Flask-server-merged
pytest

This runs unit + integration + security tests.

---

## 📡 API Endpoints

Here are some of the API endpoints your backend provides (adjust names to match your code):

Method	Endpoint	Description
POST	/users	Create a new user (or customer)
GET	/users/:id	Retrieve user details by ID
GET	/products	List all products / menu items
POST	/products	Add a new product (if admin)
GET	/products/:id	Get details of one product
GET	/users/search?username=<name>	Search for users by username
POST	/comments	Post comments / feedback (if implemented)

---

## 🔐 Authentication & Security

Ensure you handle sensitive data using environment variables (e.g. SECRET_KEY, database credentials)

Passwords should be hashed (e.g. using bcrypt) — never store plaintext

Validate all user inputs both frontend & backend (e.g. email formats, required fields)

Protect endpoints requiring auth (if you have admin routes)

Sanitize user-supplied content to protect against XSS

Use parameterized queries / ORM to prevent SQL injection

---

## 🚀 Deployment

Here are some general deployment considerations & steps:

Use environment variables to configure production vs development settings (e.g. database URI, debug mode)

Build the frontend for production (e.g. npm run build) and serve static assets (either via your Flask server or a dedicated static host / CDN)

Use a production database (PostgreSQL) with secure credentials

Setup HTTPS / SSL on server (if deploying publicly)

(Optional) Use Docker / docker-compose to containerize your services for consistency
