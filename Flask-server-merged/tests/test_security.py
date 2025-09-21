
def test_security_headers_present(client):
    # Check a few common security headers on root
    resp = client.get("/")
    headers = resp.headers
    missing = []
    for h in ["X-Content-Type-Options", "X-Frame-Options", "Content-Security-Policy", "Referrer-Policy"]:
        if h not in headers:
            missing.append(h)
    # We don't fail the test silently; if headers are missing, the test will fail to surface the issue.
    assert missing == [], "Missing security headers: " + ", ".join(missing)

def test_no_server_header(client):
    resp = client.get("/")
    # it's fine if Server header is absent; failure if it reveals server
    srv = resp.headers.get("Server", "")
    assert "Werkzeug" not in srv and "gunicorn" not in srv, f"Server header exposes implementation: {srv}"
