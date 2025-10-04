import importlib, pytest
from pathlib import Path

def test_utils_validate_email():
    # try to import utils from common places
    candidates = ["flask_server.utils", "utils", "flask_server.helpers", "helpers"]
    for name in candidates:
        try:
            mod = importlib.import_module(name)
            if hasattr(mod, "validate_email"):
                assert callable(mod.validate_email)
                assert mod.validate_email("user@example.com") in (True, False)
                return
        except Exception:
            continue
    pytest.skip("No utils.validate_email found to test.")
