# Question 3

## Problem Statement
> **3. Write a JavaScript validation script for a registration form. Use control structures (such as if-else statements) and regular expressions to ensure the password meets strength criteria (minimum 8 characters, at least one number, and one uppercase letter) and display custom error messages without reloading the page.**

---

## Solution Overview
This solution implements client-side form validation using native JavaScript DOM manipulation and event handling styled with Tailwind CSS.

### Validation Criteria & Logic
- **Prevention of Page Reload**: Handled via `event.preventDefault()` on the form submit event listener.
- **Control Structures**: Sequential `if - else if - else` conditional blocks validate each rule in order.
- **Password Strength Criteria**:
  - **Minimum length (8 chars)**: `passwordVal.length < 8`
  - **Uppercase letter**: Tested using regex `/[A-Z]/`
  - **Numeric digit**: Tested using regex `/[0-9]/`
- **Dynamic Error Rendering**:
  - Custom error messages are dynamically injected into dedicated `<p>` elements.
  - Borders are toggled between `border-gray-300` and `border-red-500`.
  - A success banner is displayed upon passing all validations.

### File Structure
- `index.html`: Complete registration form with embedded JavaScript validation logic and Tailwind CSS.
