import pytest
from app import app, db
from models import Customer, Reservation
from datetime import datetime

@pytest.fixture
def app():
    """Create a Flask app configured for testing with in-memory SQLite."""
    from flask_server.app import app as flask_app
    flask_app.config.update({
        "TESTING": True,
        "SQLALCHEMY_DATABASE_URI": "sqlite:///:memory:",
        "SQLALCHEMY_TRACK_MODIFICATIONS": False
    })

    with flask_app.app_context():
        db.create_all()
        yield flask_app
        db.session.remove()
        db.drop_all()

@pytest.fixture
def session(app):
    """Provides a clean database session for each test."""
    with app.app_context():
        yield db.session

def test_create_customer(session):
    c = Customer(name="Alice", email="alice@example.com", phone="123456789")
    session.add(c)
    session.commit()

    saved = Customer.query.first()
    assert saved.name == "Alice"
    assert saved.email == "alice@example.com"
    assert saved.phone == "123456789"

def test_create_reservation(session):
    r = Reservation(
        name="Bob",
        email="bob@example.com",
        phone="987654321",
        guests=4,
        date="2025-09-19",
        time="19:30"
    )
    session.add(r)
    session.commit()

    saved = Reservation.query.first()
    assert saved.name == "Bob"
    assert saved.email == "bob@example.com"
    assert saved.guests == 4
    assert isinstance(saved.date, str) or isinstance(saved.date, datetime)

def test_customer_str_method(session):
    c = Customer(name="Charlie", email="charlie@example.com")
    session.add(c)
    session.commit()

    assert "Charlie" in str(c)

def test_reservation_str_method(session):
    r = Reservation(name="Dana", email="dana@example.com", guests=2, date="2025-09-20", time="18:00")
    session.add(r)
    session.commit()

    assert "Dana" in str(r)
    