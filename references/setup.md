# Google Apps Script Email Bypass Setup

This skill allows OpenClaw to send emails even when SMTP ports (25, 465, 587) are blocked by your cloud provider (e.g., DigitalOcean).

## 1. Google Apps Script Setup

1.  Go to [script.google.com](https://script.google.com) and create a **New Project**.
2.  Paste the contents of `assets/Code.gs` into the editor.
3.  Go to **Project Settings** (gear icon) -> **Script Properties**.
4.  Add a property named `AUTH_TOKEN` and set it to a secure, random string.
5.  Click **Deploy** -> **New Deployment**.
6.  Select type: **Web App**.
7.  Description: `OpenClaw Email Bypass`.
8.  Execute as: **Me**.
9.  Who has access: **Anyone** (Your `AUTH_TOKEN` will protect it).
10. Copy the **Web App URL**.

## 2. OpenClaw Configuration

Set the following environment variables in your OpenClaw gateway environment:

- `GOOGLE_SCRIPT_URL`: The URL you copied in the step above.
- `GOOGLE_SCRIPT_TOKEN`: The secure string you set as `AUTH_TOKEN`.

## 3. Usage

The skill will automatically trigger when you need to send an email and SMTP is unavailable.
Alternatively, call the script directly:

```bash
python3 scripts/send_email.py "target@example.com" "Hello from OpenClaw" "This is a test message."
```
