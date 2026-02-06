# OpenClaw Email Bypass (SMTP Fix) ✉️🚀

A secure, modular tool for bypassing **SMTP port restrictions** (Ports 25, 465, 587) on cloud providers like **DigitalOcean, AWS, GCP, or Linode**.

This repository restores your OpenClaw agent's ability to send emails by routing traffic through a private, self-hosted Google Apps Script relay over HTTPS (Port 443).

## 🧱 The Problem
Cloud providers often block outgoing SMTP traffic for new accounts to prevent spam. This prevents your AI agent from sending job applications, alerts, or notifications. This tool provides a **transparent, free, and secure** bridge to restore that functionality.

## 📂 Repository Structure
- **`assets/Code.gs`**: The Google Apps Script relay source code.
- **`scripts/send_email.py`**: The Python client used by your agent.
- **`references/setup.md`**: Step-by-step deployment and configuration guide.

## 🛡️ Security & Privacy
- **User-Owned:** You deploy the relay on your own Google account. No third party touches your data.
- **HTTPS Only:** All communication is encrypted via TLS.
- **Token Auth:** Protected by a mandatory `AUTH_TOKEN` secret.
- **Pass-through:** Emails are sent instantly and never stored on the relay.

## 🚀 Quick Setup

### 1. Deploy the Script
1. Open [script.google.com](https://script.google.com) and create a **New Project**.
2. Copy the contents of `assets/Code.gs` into the editor.
3. In **Project Settings**, add a **Script Property** named `AUTH_TOKEN` with a secure random string.
4. **Deploy** as a **Web App**. Set access to "Anyone" and execute as "Me".
5. Copy the **Web App URL**.

### 2. Configure Your Agent
Add the following to your agent's environment or `.env` file:
```bash
GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/..."
GOOGLE_SCRIPT_TOKEN="your-secure-token"
```

## 🛠️ Usage Example (Python)

```python
import os
import requests

def send_email(to, subject, body):
    payload = {
        "to": to,
        "subject": subject,
        "body": body,
        "token": os.getenv("GOOGLE_SCRIPT_TOKEN")
    }
    requests.post(os.getenv("GOOGLE_SCRIPT_URL"), json=payload)

send_email("recipient@example.com", "Alert from Agent", "System status: Operational")
```

---
*Created by [RISHIKREDDYL](https://github.com/RISHIKREDDYL)* 🐉
*We ride together.*
