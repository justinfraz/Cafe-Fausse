from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, Customer, Reservation
from flask_cors import CORS
from datetime import datetime
from random import randint
import os

app = Flask(__name__)

# Database configuration (new)
DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/cafe_fausse')
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key')
db.init_app(app)  # Initialize SQLAlchemy with the app
migrate = Migrate(app, db)
CORS(app)

with app.app_context():
    #db.drop_all()  # WARNING: This deletes all existing tables/data!
    db.create_all()

@app.route("/customers", methods=["GET"])
def get_customers():
    customers = Customer.query.all()
    return jsonify([
        {
            "customer_id": c.customer_id,
            "customer_name": c.customer_name,
            "email_address": c.email_address,
            "phone_number": c.phone_number,
            "newsletter_signup": c.newsletter_signup
        } for c in customers
    ])

@app.route("/customers", methods=["POST"])
def add_customer():
    data = request.get_json()
    customer = Customer(
        customer_name=data.get("customer_name"),
        email_address=data.get("email_address"),
        phone_number=data.get("phone_number"),
        newsletter_signup=data.get("newsletter_signup", False)
    )
    db.session.add(customer)
    db.session.commit()
    return jsonify({"message": "Customer added!", "customer_id": customer.customer_id})

@app.route("/reservations", methods=["GET"])
def get_reservations():
    reservations = Reservation.query.all()
    return jsonify([
        {
            "reservation_id": r.reservation_id,
            "customer_id": r.customer_id,
            "time_slot": r.time_slot,
            "table_number": r.table_number
        } for r in reservations
    ])

@app.route("/reservations", methods=["POST"])
def add_reservation():
    data = request.get_json()

    # Extract fields
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    guests = data.get("guests")
    date_str = data.get("date")
    time_str = data.get("time")

    # Validate required fields
    if not all([name, email, date_str, time_str, guests]):
        return jsonify({"error": "Missing required fields"}), 400

    # Combine date and time into a single datetime
    try:
        time_slot = datetime.fromisoformat(f"{date_str}T{time_str}")
    except ValueError:
        return jsonify({"error": "Invalid date or time format"}), 400

# Check how many reservations already exist for this time slot
    existing_count = Reservation.query.filter_by(time_slot=time_slot).count()
    if existing_count >= 30:
        return jsonify({"error": "No tables available for this time slot"}), 400

    # Find or create customer by email
    customer = Customer.query.filter_by(email_address=email).first()
    if not customer:
        customer = Customer(
            customer_name=name,
            email_address=email,
            phone_number=phone
        )
        db.session.add(customer)
        db.session.commit()

    # Pick random available table number (1–30) that is not already booked
    taken_tables = {
        r.table_number for r in Reservation.query.filter_by(time_slot=time_slot).all()
    }
    available_tables = [t for t in range(1, 31) if t not in taken_tables]

    if not available_tables:
        return jsonify({"error": "No tables available for this time slot"}), 400

    random_table_number = randint(1, len(available_tables))
    table_number = available_tables[random_table_number - 1]

    # Create reservation
    reservation = Reservation(
        customer_id=customer.customer_id,
        time_slot=time_slot,
        table_number=table_number,
	    guests=guests
    )
    db.session.add(reservation)
    db.session.commit()

    return jsonify({
        "message": "Reservation added!",
        "reservation_id": reservation.reservation_id,
        "table_number": random_table_number
    }), 201

@app.route("/newsletter-signup", methods=["POST"])
def newsletter_signup():
    data = request.get_json()
    email = data.get("email")
    name = data.get("name")

    if not email:
        return jsonify({"error": "Email is required"}), 400

    customer = Customer.query.filter_by(email_address=email).first()

    if customer:
        # Update name if they have none and user provided one
        if (not customer.customer_name or customer.customer_name.strip() == "") and name:
            customer.customer_name = name
        customer.newsletter_signup = True
    else:
        customer = Customer(
            customer_name=name or "Newsletter Subscriber",
            email_address=email,
            newsletter_signup=True
        )
        db.session.add(customer)

    db.session.commit()

    return jsonify({
        "message": "Signed up for newsletter successfully",
        "customer_id": customer.customer_id
    }), 201

if __name__ == "__main__":
    app.run(debug=True)