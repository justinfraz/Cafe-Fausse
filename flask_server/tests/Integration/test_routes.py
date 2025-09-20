import pytest
from app import app, db
from models import Customer, Reservation
from flask_server.models import User, Product  # adjust

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

def test_create_user_route(client):
    # Suppose your route is POST /users with JSON {username, email, password}
    response = client.post('/users', json={
        "username": "bob",
        "email": "bob@example.com",
        "password": "StrongPass123"
    })
    assert response.status_code == 201  # or whatever your API returns
    data = response.get_json()
    assert "id" in data
    assert data['username'] == "bob"

def test_get_user_route(client):
    # first add a user directly via model + session
    with app.app_context():
        user = User(username="charlie", email="charlie@example.com")
        user.set_password("passwd")  # if you have a setter
        db.session.add(user)
        db.session.commit()
        user_id = user.id

    response = client.get(f'/users/{user_id}')
    assert response.status_code == 200
    data = response.get_json()
    assert data['username'] == "charlie"
    assert data['email'] == "charlie@example.com"

def test_get_user_not_found(client):
    response = client.get('/users/99999')
    assert response.status_code == 404

def test_create_product_route(client):
    response = client.post('/products', json={
        "name": "Latte",
        "price": 4.50,
        "description": "Milky coffee"
    })
    assert response.status_code == 201
    data = response.get_json()
    assert data['name'] == "Latte"
    assert data['price'] == 4.50

def test_list_products_route(client):
    with app.app_context():
        p1 = Product(name="Expresso", price=3.00, description="Strong coffee")
        p2 = Product(name="Mocha", price=4.00, description="Chocolate flavored")
        db.session.add_all([p1, p2])
        db.session.commit()

    resp = client.get('/products')
    assert resp.status_code == 200
    data = resp.get_json()
    assert isinstance(data, list)
    # ensure the products you added are present
    names = [prod['name'] for prod in data]
    assert "Expresso" in names
    assert "Mocha" in names
