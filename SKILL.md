---
name: google-script-email-bypass
description: Send emails via Google Apps Script when traditional SMTP ports (25/465/587) are blocked by cloud providers like DigitalOcean, AWS, GCP, or Linode. Essential for OpenClaw agents hosted on VPS environments that restrict outgoing mail. Supports plain text and HTML emails.
---

# Google Script Email Bypass ✉️🚀

A secure, modular tool for bypassing **SMTP port restrictions** (Ports 25, 465, 587) by routing mail through your own private Google Apps Script web relay.

## 🧱 The Problem: Cloud SMTP Blocks
Many cloud providers (DigitalOcean, AWS EC2, GCP, Linode) block outgoing SMTP ports for new accounts to prevent spam. This "silences" your OpenClaw agent, preventing it from sending alerts, job applications, or notifications.

This skill provides a **transparent, free, and self-hosted** bridge to restore your agent's voice.

## 🛡️ Security & Privacy (Transparent Audit)

Unlike malicious "credential stealer" skills, this tool is built for total user control:
1.  **User-Owned Infrastructure:** You deploy the Google Script yourself on your own account. Audit every line of `Code.gs` before you click deploy.
2.  **No Automatic Data Access:** This skill **cannot** read your system `.env` file. You must explicitly set `GOOGLE_SCRIPT_URL` and `GOOGLE_SCRIPT_TOKEN`.
3.  **Encrypted Transport:** All data moves over HTTPS.
4.  **Zero Persistence:** The relay is a pass-through; your emails are never stored on any third-party server.

## Tools

### send_email
Send a plain text or HTML email via the configured Google Script.

```bash
# Basic usage
python3 scripts/send_email.py "recipient@email.com" "Subject Line" "Message body text"

# HTML usage (useful for job applications/formatted reports)
python3 scripts/send_email.py "recipient@email.com" "Subject Line" "Plain text fallback" "<h1>HTML Message</h1>"
```

## Setup

Before use, you must deploy the Google Apps Script and configure your environment variables.

See [setup.md](references/setup.md) for step-by-step instructions.

---
*Created by RISHIKREDDYL* 🐉
