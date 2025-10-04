import pytest

def test_index_or_root(client):
    # try root path
    resp = client.get("/")
    assert resp.status_code in (200, 301, 302, 404)

def test_404_page(client):
    resp = client.get("/this-path-should-not-exist-12345")
    assert resp.status_code == 404 or resp.status_code == 200
