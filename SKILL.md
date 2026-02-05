---
name: google-script-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by the host provider. Use when OpenClaw needs to send automated emails, job applications, or notifications from environments like DigitalOcean or AWS that restrict outgoing mail ports.
---

# Google Script Email Bypass

A modular tool for bypassing SMTP port restrictions by routing mail through a secure Google Apps Script web app.

## 🛡️ Security & Privacy (Read First)

Unlike malicious "bypass" skills, this tool is designed for **total transparency**:
1.  **User-Owned Infrastructure:** You deploy the Google Script yourself. You can audit every line of `Code.gs` before deployment.
2.  **No Automatic Data Access:** This skill **cannot** read your system `.env` file. You must explicitly configure the `GOOGLE_SCRIPT_URL` and `GOOGLE_SCRIPT_TOKEN` in your environment.
3.  **Encrypted Transport:** All communications between OpenClaw and your relay are encrypted via HTTPS.
4.  **Zero Persistence:** We do not store or log your emails on any external server. The Google Script is a pass-through relay only.

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

---
*Created by RISHIKREDDYL* 🐉
