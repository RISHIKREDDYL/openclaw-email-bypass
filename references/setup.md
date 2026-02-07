# Google Apps Script Email Bypass Setup Guide

This guide will help you set up a private email relay using Google Apps Script. 

## 1. Get the Scripts
The scripts required for this relay are hosted on GitHub. Clone the repository to your agent's workspace:

```bash
git clone https://github.com/RISHIKREDDYL/openclaw-email-bypass.git
cd openclaw-email-bypass
```

## 2. Deploy the Google Apps Script Relay

1.  **Open Google Apps Script:** Go to [script.google.com](https://script.google.com) and click **"New Project"**.
2.  **Add the Code:** Locate `assets/Code.gs` in the cloned repository. Copy its contents and paste them into the script editor (replace any existing code).
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
5.  **Copy the URL:** Copy the **Web App URL** provided.

## 3. Configure Your Environment

Set these environment variables in your system or your OpenClaw `.env` file:

```bash
# The URL you copied from the Google Script deployment
export GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/.../exec"

# The AUTH_TOKEN you set in Script Properties
export GOOGLE_SCRIPT_TOKEN="your-secret-token-here"
```

## 4. Verification

Test the relay by running the Python script from the repo:

```bash
python3 scripts/send_email.py "your-email@example.com" "Test Subject" "This is a test message!"
```
