# Question 7

## Problem Statement
> **7. Create a lightweight web application using the Flask framework in Python. Capture the submitted data via a POST request and securely display a dynamic confirmation screen.**

---

## Solution Overview
This solution implements a lightweight Flask web application that listens for `POST` requests, extracts submitted data (supporting both JSON from Thunder Client and HTML form data), and securely renders a dynamic confirmation view using Jinja2 templates styled with Tailwind CSS.

### Security
- **XSS Protection**: Jinja2 template interpolation (`{{ variable }}`) automatically HTML-escapes all dynamic content to mitigate Cross-Site Scripting (XSS).

---

## How to Run

### 1. Start the Flask Server
```bash
# Navigate to Q7 directory
cd Mock_Practical_Solutions/Q7

# Install dependencies if needed
pip install -r requirements.txt

# Run the application
python app.py
```
Server starts on: `http://127.0.0.1:5000/`

---

## Thunder Client Instructions (Sending POST Request)
You do not need to write client code to send requests. Use Thunder Client in VS Code:

1. **Method**: `POST`
2. **URL**: `http://127.0.0.1:5000/`
3. **Headers**:
   - `Content-Type`: `application/json`
4. **Body (JSON)**:
```json
{
  "name": "Shivam Pimple",
  "email": "shivampimple29@student.sfit.ac.in",
  "message": "Full-Stack Development with Flask & Python"
}
```
5. Click **Send**.
6. Switch to the **Response -> Preview / HTML** tab in Thunder Client to observe the dynamic confirmation screen rendered with your data.

---

### File Structure
- `app.py`: Flask application handling GET and POST requests.
- `templates/confirmation.html`: Secure dynamic confirmation template.
- `templates/index.html`: Browser-based submission form.
- `requirements.txt`: Python dependencies.
