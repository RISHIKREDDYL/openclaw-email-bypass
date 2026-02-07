# Google Script Email Bypass Usage Examples

## Command Line Usage

### Simple Text Email
```bash
python3 scripts/send_email.py "recipient@example.com" "Hello from Beau" "This is a simple text message."
```

### HTML Email
```bash
python3 scripts/send_email.py "recipient@example.com" "Daily Report" "Fallback text for non-HTML clients" "<h1>Daily Status</h1><p>The dragon is <b>active</b>.</p>"
```

---

## Python Integration

You can import the `send_email` function directly into your own scripts or agent tasks.

### Basic Integration
```python
from scripts.send_email import send_email

# Send a notification
send_email(
    to="dev@example.com",
    subject="Critical Alert",
    body="The system has reached 90% disk usage."
)
```

### Automated Job Application Pattern
```python
from scripts.send_email import send_email

def apply_for_job(candidate_email, company_name, job_title):
    subject = f"Application for {job_title} - {candidate_email}"
    html_body = f"""
    <h2>Job Application</h2>
    <p>Dear Hiring Manager at {company_name},</p>
    <p>I am writing to apply for the <b>{job_title}</b> position.</p>
    <p>Best regards,<br>OpenClaw Agent</p>
    """
    
    success = send_email(
        to="hr@company.com",
        subject=subject,
        body="Please see HTML version.",
        html_body=html_body
    )
    
    if success:
        print("Application sent!")
```

---

## Troubleshooting

### "Error: GOOGLE_SCRIPT_URL and GOOGLE_SCRIPT_TOKEN environment variables must be set."
- **Cause:** The script cannot find your configuration.
- **Fix:** Ensure you have exported the environment variables in the session where the script is running. Check with `echo $GOOGLE_SCRIPT_URL`.

### "Failed to send email: Unauthorized"
- **Cause:** The `GOOGLE_SCRIPT_TOKEN` on your machine does not match the `AUTH_TOKEN` in the Google Script properties.
- **Fix:** Update the Script Properties in the Google Apps Script editor and redeploy if necessary.

### "Failed to send email: Script completed but did not return 'Success'"
- **Cause:** Usually a Google Script quota issue or a Google-side error.
- **Fix:** Check your Google Script **Executions** log at [script.google.com](https://script.google.com) to see the specific error.
