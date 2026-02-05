---
name: google-script-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by the host provider. Use when OpenClaw needs to send automated emails, job applications, or notifications from environments like DigitalOcean or AWS that restrict outgoing mail ports.
---

# Google Script Email Bypass

A modular tool for bypassing SMTP port restrictions by routing mail through a secure Google Apps Script web app.

## Tools

### send_email
Send a plain text or HTML email via the configured Google Script.

```bash
# Basic usage
python3 scripts/send_email.py "recipient@email.com" "Subject Line" "Message body text"

# HTML usage
python3 scripts/send_email.py "recipient@email.com" "Subject Line" "Plain text fallback" "<h1>HTML Message</h1>"
```

## Setup

Before use, you must deploy the Google Apps Script and configure your environment variables.

See [setup.md](references/setup.md) for step-by-step instructions.

## Security

- Requests are authenticated via a private `AUTH_TOKEN`.
- No emails or passwords are stored in the local codebase.
- Communications are encrypted via HTTPS.

---
*Created by RISHIKREDDYL* 🐉
