# tests/integration/test_reservation_limits.py
import pytest
from datetime import datetime
from flask_server.models import db, Customer, Reservation

def test_max_30_tables_per_time_slot(client, app):
    time_slot = datetime(2025, 9, 20, 19, 0, 0)  # 7pm slot
    email_base = "guest{}@example.com"

    with app.app_context():
        # Create 30 reservations for the same slot
        for i in range(30):
            customer = Customer(
                customer_name=f"Guest {i}",
                email_address=email_base.format(i),
                phone_number="1234567890"
            )
            db.session.add(customer)
            db.session.commit()

            reservation = Reservation(
                customer_id=customer.customer_id,
                time_slot=time_slot,
                table_number=i + 1,  # Ensure unique table numbers
                guests=2
            )
            db.session.add(reservation)
        db.session.commit()

        # Now try adding the 31st reservation
        customer = Customer(
            customer_name="Overflow Guest",
            email_address="overflow@example.com",
            phone_number="1234567890"
        )
        db.session.add(customer)
        db.session.commit()

        res = client.post("/reservations", json={
            "name": "Overflow Guest",
            "email": "overflow@example.com",
            "phone": "1234567890",
            "guests": 2,
            "date": "2025-09-20",
            "time": "19:00:00"
        })

        assert res.status_code == 400
        assert b"No tables available for this time slot" in res.data
