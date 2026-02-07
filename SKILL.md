---
name: google-script-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by cloud providers like DigitalOcean, AWS, GCP, or Linode.
homepage: https://github.com/RISHIKREDDYL/openclaw-email-bypass
metadata: {"clawdbot":{"emoji":"✉️","requires":{"bins":["python3"]},"install":[{"id":"pip","kind":"exec","command":"pip3 install requests","label":"Install python requests"}]}}
---

# Google Script Email Bypass (SMTP Fix) ✉️🚀

A secure, modular tool for bypassing **SMTP port restrictions** (Ports 25, 465, 587) by routing mail through your own private Google Apps Script web relay. This is essential for OpenClaw agents hosted on VPS environments that restrict outgoing mail.

## 🧱 The Problem: Cloud SMTP Blocks
Many cloud providers (DigitalOcean, AWS EC2, GCP, Linode) block outgoing SMTP ports for new accounts to prevent spam. This "silences" your OpenClaw agent, preventing it from sending alerts, job applications, or notifications.

This skill provides a **transparent, free, and self-hosted** bridge to restore your agent's voice.

## 🚀 Quick Start
1.  **Deploy:** Paste `assets/Code.gs` into a new Google Apps Script project.
2.  **Auth:** Set `AUTH_TOKEN` in Script Properties.
3.  **Config:** Set `GOOGLE_SCRIPT_URL` and `GOOGLE_SCRIPT_TOKEN` env vars.
4.  **Send:**
    ```bash
    python3 scripts/send_email.py "recipient@email.com" "Subject" "Message"
    ```

## Core Tools

### send_email
The primary tool for sending emails. It supports both plain text and HTML formats.

```bash
python3 scripts/send_email.py <recipient> <subject> <body> [html_body]
```

**Parameters:**
- `recipient` - The destination email address.
- `subject` - The subject line of the email.
- `body` - The plain text content of the email.
- `html_body` (optional) - The HTML-formatted content. If provided, most modern email clients will display this instead of the plain text body.

## 🛡️ Security & Privacy
- **User-Owned Infrastructure:** You deploy the relay on your own account.
- **Encrypted Transport:** All data moves over HTTPS.
- **Zero Persistence:** The relay is a pass-through; your emails are never stored.

## Resources
- [Setup Guide](references/setup.md) - Step-by-step deployment.
- [Usage Examples](references/examples.md) - Python and CLI patterns.
- [GitHub Repository](https://github.com/RISHIKREDDYL/openclaw-email-bypass)

---
*Created by RISHIKREDDYL* 🐉
*We ride together.*
