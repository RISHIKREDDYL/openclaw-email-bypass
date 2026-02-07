---
name: openclaw-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by cloud providers like DigitalOcean, AWS, GCP, or Linode.
homepage: https://github.com/RISHIKREDDYL/openclaw-email-bypass
metadata: {"clawdbot":{"emoji":"✉️","requires":{"bins":["python3"]},"install":[{"id":"pip","kind":"exec","command":"pip3 install requests","label":"Install python requests"}]}}
---

# OpenClaw Email Bypass (SMTP Fix) ✉️🚀

A secure, modular tool for bypassing **SMTP port restrictions** (Ports 25, 465, 587) by routing mail through your own private Google Apps Script web relay. This is essential for OpenClaw agents hosted on VPS environments that restrict outgoing mail.

## 🧱 The Problem: Cloud SMTP Blocks
Many cloud providers (DigitalOcean, AWS EC2, GCP, Linode) block outgoing SMTP ports for new accounts to prevent spam. This skill provides a **transparent, free, and self-hosted** bridge to restore your agent's voice.

## 📦 Installation & Setup
To keep the skill package compliant with distribution rules, the actual relay scripts and assets must be downloaded from the official repository.

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/RISHIKREDDYL/openclaw-email-bypass.git
    cd openclaw-email-bypass
    ```
2.  **Deploy the Script:** Follow the [Setup Guide](references/setup.md) to deploy `assets/Code.gs` to Google Apps Script.
3.  **Config:** Set your `GOOGLE_SCRIPT_URL` and `GOOGLE_SCRIPT_TOKEN` environment variables.

## Tools

### send_email
The primary command-line tool for sending emails. (Requires `scripts/send_email.py` from the repo).

```bash
python3 scripts/send_email.py <recipient> <subject> <body> [html_body]
```

**Parameters:**
- `recipient` - The destination email address.
- `subject` - The subject line of the email.
- `body` - The plain text content of the email.
- `html_body` (optional) - The HTML-formatted content.

## 🛡️ Security & Privacy
- **User-Owned Infrastructure:** You deploy the relay on your own account.
- **Encrypted Transport:** All data moves over HTTPS.
- **Zero Persistence:** The relay is a pass-through; your emails are never stored.

## Resources
- [Full Setup Guide](references/setup.md) - Detailed deployment steps.
- [Usage Examples](references/examples.md) - CLI and Python patterns.
- [GitHub Repository](https://github.com/RISHIKREDDYL/openclaw-email-bypass)

---
*Created by RISHIKREDDYL* 🐉
*We ride together.*
