import pytest
from datetime import datetime, timedelta
from flask import Flask
from flask.testing import FlaskClient
from models import db, Customer, Reservation
from app import app as flask_app


@pytest.fixture
def app():
    """Create a test Flask app with a clean database."""
    flask_app.config["TESTING"] = True
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"  # use in-memory DB for tests
    with flask_app.app_context():
        db.create_all()
        yield flask_app
        db.session.remove()
        db.drop_all()


@pytest.fixture
def client(app) -> FlaskClient:
    return app.test_client()


def test_no_reservation_when_all_tables_full(app, client):
    """Ensure reservation fails when all 30 tables are already booked."""
    with app.app_context():
        # Create a test customer
        base_time = datetime.now().replace(minute=0, second=0, microsecond=0)

        # Fill all 30 tables
        for i in range(30):
            customer = Customer(
                customer_name=f"Customer {i}",
                email_address=f"customer{i}@example.com",
                phone_number=f"555-000{i}"
            )
            db.session.add(customer)
            db.session.flush()  # assign ID without commit yet
            reservation = Reservation(
                customer_id=customer.customer_id,
                time_slot=base_time,
                table_number=i + 1,
                guests=2
            )
            db.session.add(reservation)

        db.session.commit()

        # Now try to add a 31st reservation through API
        response = client.post("/reservations", json={
            "name": "Extra Customer",
            "email": "extra@example.com",
            "phone": "555-9999",
            "guests": 2,
            "date": base_time.date().isoformat(),
            "time": base_time.time().strftime("%H:%M:%S"),
        })

        assert response.status_code == 400
        assert response.json["error"] == "No tables available for this time slot"
