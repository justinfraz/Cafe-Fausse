import pytest
from flask_server import utils  # adjust path
# Suppose you have a utils file with, e.g., validation or formatting

def test_validate_email_good():
    assert utils.validate_email("valid@example.com") is True

def test_validate_email_bad():
    assert utils.validate_email("not-an-email") is False

def test_format_price():
    value = 5
    assert utils.format_price(value) == "$5.00"  # or whatever format you use
