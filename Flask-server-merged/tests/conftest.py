import importlib, sys, pathlib, os, pytest
from pathlib import Path
from flask import Flask

PROJECT_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT_ROOT))

def load_app() -> Flask:
    """
    Try to import the Flask app or app factory.
    """
    candidates = ["flask_server", "app", "server", "wsgi", "main"]
    for name in candidates:
        try:
            mod = importlib.import_module(name)
            if hasattr(mod, "create_app") and callable(mod.create_app):
                return mod.create_app()
            if hasattr(mod, "app"):
                maybe_app = getattr(mod, "app")
                # If it's a Flask instance
                if isinstance(maybe_app, Flask):
                    return maybe_app
                # If it's a factory
                if callable(maybe_app):
                    return maybe_app()
        except Exception:
            continue
    pytest.skip("No importable Flask app or factory found in project.")

@pytest.fixture(scope="session")
def app():
    return load_app()

@pytest.fixture
def client(app):
    return app.test_client()
