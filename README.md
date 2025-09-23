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
| Frontend | React, React Router, CSS / SCSS or styled components for responsiveness |
| Testing | pytest for backend |

---

## ⚙️ Setup & Installation

These are steps to get the project up and running on your local machine for development / testing.

### Prerequisites

- Python 3.x  (https://www.python.org/downloads/)
- Node.js / npm  (https://nodejs.org/en/download)
- PostgreSQL (https://www.postgresql.org/download/windows/)

---

### Backend Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/justinfraz/Cafe-Fausse.git
   cd Cafe-Fausse/Flask-server-merged

2. Create & activate a virtual environment:

   ```bash
   py -m venv venv
   venv\Scripts\activate

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   pip install -r requirements-dev.txt

---

### Frontend Setup

For both the standard and responsive clients:

1. Navigate to the client folder:

   ```bash
   cd Reactjs-client-responsive

2. Install dependencies:

   ```bash
   npm install

3. Configure API base URL (if needed):

   ```bash
   For example, configure environment variable like REACT_APP_API_URL=http://localhost:5000

---

## ▶️ Running Locally

1. First, start the backend:

   ```bash
   cd Flask-server
   flask run
   Open your browser and navigate to http://localhost:5000

2. Then, start the frontend:

   ```bash
   cd Reactjs-client-responsive
   npm run dev
   Open your browser and navigate to http://localhost:3000 (or whatever port React is serving on).

---

## 🔍 Running Tests

1. Backend:

   ```bash
   cd Flask-server-merged
   pytest

This runs unit + integration + security tests.

---

##📡 API Endpoints

Here are some of the API endpoints your backend provides (adjust names to match your code):


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