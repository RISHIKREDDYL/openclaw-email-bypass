# OpenClaw Email Bypass Usage Examples

These examples assume you have cloned the repository to your local machine or agent workspace.

## Command Line Usage

### Simple Text Email
```bash
# Run from the root of the openclaw-email-bypass directory
python3 scripts/send_email.py "recipient@example.com" "Hello from Beau" "This is a simple text message."
```

### HTML Email
```bash
python3 scripts/send_email.py "recipient@example.com" "Daily Report" "Fallback text" "<h1>Daily Status</h1><p>The dragon is <b>active</b>.</p>"
```

---

## Python Integration

You can import the `send_email` function directly from the repository's source.

### Basic Integration
```python
# Ensure scripts/ is in your python path
from scripts.send_email import send_email

send_email(
    to="dev@example.com",
    subject="Critical Alert",
    body="The system has reached 90% disk usage."
)
```

---

## Troubleshooting

### "Error: GOOGLE_SCRIPT_URL and GOOGLE_SCRIPT_TOKEN environment variables must be set."
- **Fix:** Ensure you have exported the environment variables in the session where the script is running. Check with `echo $GOOGLE_SCRIPT_URL`.

### "Failed to send email: Unauthorized"
- **Fix:** Update the Script Properties in the Google Apps Script editor and ensure they match your local `GOOGLE_SCRIPT_TOKEN`.

### "No such file or directory: scripts/send_email.py"
- **Fix:** Ensure you are running the command from the root of the cloned `openclaw-email-bypass` repository.
