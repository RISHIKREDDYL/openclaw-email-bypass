# Google Apps Script Email Bypass Setup Guide

This guide will help you set up a private email relay using Google Apps Script. This is necessary for OpenClaw agents running on cloud providers (like DigitalOcean or AWS) where outgoing SMTP ports (25, 465, 587) are blocked.

## Prerequisites

- A Google Account (to host the script).
- Python 3.x installed on your OpenClaw host.
- The `requests` library (`pip install requests`).

## 1. Deploy the Google Apps Script Relay

1.  **Open Google Apps Script:** Go to [script.google.com](https://script.google.com) and click **"New Project"**.
2.  **Add the Code:** Copy the contents of `assets/Code.gs` from this repository and paste it into the script editor (replace any existing code).
3.  **Set an Auth Token:**
    - Click on the **Project Settings** (gear icon) on the left sidebar.
    - Scroll down to **Script Properties**.
    - Click **"Edit script properties"** -> **"Add property"**.
    - Property: `AUTH_TOKEN`
    - Value: `your-secret-token-here` (Use a long, random string).
    - Click **"Save script properties"**.
4.  **Deploy as Web App:**
    - Click the **"Deploy"** button at the top right -> **"New deployment"**.
    - Click the **"Select type"** (gear icon) -> **"Web App"**.
    - **Description:** `OpenClaw Email Relay`.
    - **Execute as:** `Me`.
    - **Who has access:** `Anyone` (The `AUTH_TOKEN` protects it).
    - Click **"Deploy"**.
5.  **Copy the URL:** Copy the **Web App URL** provided. You will need this for your configuration.

## 2. Configure Your Environment

You need to tell the Python script where your relay is and what token to use. Set these environment variables in your system or your OpenClaw `.env` file:

```bash
# The URL you copied from the Google Script deployment
export GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/.../exec"

# The AUTH_TOKEN you set in Script Properties
export GOOGLE_SCRIPT_TOKEN="your-secret-token-here"
```

## 3. Installation

If you are using this as an OpenClaw skill, the files should already be in your workspace. If you are setting it up manually:

```bash
git clone https://github.com/RISHIKREDDYL/openclaw-email-bypass.git
cd openclaw-email-bypass
pip install requests
```

## 4. Verification

Test the relay by sending a test email:

```bash
python3 scripts/send_email.py "your-email@example.com" "Test Subject" "This is a test message from my OpenClaw relay!"
```

If successful, you will see `Email sent successfully to your-email@example.com`.
