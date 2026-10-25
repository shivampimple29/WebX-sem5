# Question 2

## Problem Statement
> **2. Design a user registration form containing fields for Name, Email, Password, and Phone Number. Implement HTML5 native constraints (like required, pattern, and type=”email”) to ensure basic client-side data validation.**

---

## Solution Overview
This solution provides a clean, minimalistic user registration form built with semantic HTML5 and styled using Tailwind CSS (via CDN) without external CSS dependencies or unnecessary visual clutter.

### HTML5 Native Constraints Implemented
- **Full Name**:
  - `required`: Field must not be empty.
  - `pattern="[A-Za-z ]{3,}"`: Ensures only alphabet characters and spaces (minimum 3 characters).
- **Email Address**:
  - `required`: Mandatory input.
  - `type="email"`: Enforces browser-native email syntax validation (`user@domain.ext`).
- **Password**:
  - `required`: Mandatory input.
  - `type="password"`: Masks sensitive credentials.
  - `minlength="8"`: Enforces minimum password strength requirement.
- **Phone Number**:
  - `required`: Mandatory input.
  - `type="tel"`: Optimizes mobile numerical keypad input.
  - `pattern="[0-9]{10}"`: Restricts entry to a standard 10-digit numeric mobile number.
  - `maxlength="10"`: Restricts maximum character length.

### File Structure
- `index.html`: Self-contained, responsive registration form styled using Tailwind CSS utility classes.
