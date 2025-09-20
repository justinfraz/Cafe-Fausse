import pytest
from app import app, db
from models import Customer, Reservation
from flask_server.models import User

@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_sql_injection_in_user_search(client):
    # Suppose you have a route GET /users/search?username=<username>
    malicious = "' OR '1'='1"
    response = client.get(f"/users/search?username={malicious}")
    # Expect either 400 (bad param) or safe filtered output
    assert response.status_code in (200, 400)
    data = response.get_json()
    if response.status_code == 200:
        # If you return a list of users, ensure that no user is included that shouldn't be
        for u in data.get('users', []):
            assert malicious not in u.get('username', '')

def test_xss_protection_on_input(client):
    # Suppose you have a route POST /comments accepting “text”
    script_payload = "<script>alert('xss')</script>"
    post_data = { "text": script_payload }
    response = client.post("/comments", json=post_data)
    assert response.status_code == 201  # or your normal path
    data = response.get_json()
    # Depending on your sanitizer: maybe it strips tags
    assert "<script>" not in data.get('text', "")
