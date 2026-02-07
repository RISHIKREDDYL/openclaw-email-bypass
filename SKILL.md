---
name: google-script-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by cloud providers like DigitalOcean, AWS, GCP, or Linode.
homepage: https://github.com/RISHIKREDDYL/openclaw-email-bypass
metadata: {"clawdbot":{"emoji":"✉️","requires":{"bins":["python3"]},"install":[{"id":"pip","kind":"exec","command":"pip3 install requests","label":"Install python requests"}]}}
---

# Google Script Email Bypass (SMTP Fix)

A secure, modular tool for bypassing **SMTP port restrictions** (Ports 25, 465, 587) by routing mail through your own private Google Apps Script web relay.

## 🧱 The Problem: Cloud SMTP Blocks
Many cloud providers (DigitalOcean, AWS EC2, GCP, Linode) block outgoing SMTP ports for new accounts to prevent spam. This skill provides a **transparent, free, and self-hosted** bridge to restore your agent's voice.

## 🛡️ Security & Privacy
1.  **User-Owned Infrastructure:** You deploy the Google Script yourself.
2.  **Explicit Auth:** Requires `GOOGLE_SCRIPT_URL` and `GOOGLE_SCRIPT_TOKEN` env vars.
3.  **Encrypted Transport:** Uses HTTPS.

## Tools

### send_email
Send a plain text or HTML email via the configured Google Script.

```bash
python3 scripts/send_email.py "recipient@email.com" "Subject Line" "Message body text"
```

**Parameters:**
- `recipient` - Destination email address
- `subject` - Email subject
- `body` - Plain text message
- `html_body` (optional) - Formatted HTML content

## Setup

See [setup.md](references/setup.md) for step-by-step instructions on deploying the Google Script and setting environment variables.

---
*Created by RISHIKREDDYL* 🐉
