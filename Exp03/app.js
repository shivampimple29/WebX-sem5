const form = document.querySelector("#form");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // remove spaces
  let firstName = fname.value.trim();
  let lastName = lname.value.trim();
  let userEmail = email.value.trim();

  // First name validation
  if (firstName === "") {
    alert("Please enter your first name");
    return;
  }

  // Last name validation
  if (lastName === "") {
    alert("Please enter your last name");
    return;
  }

  // Gender validation
  if (gender.value === "") {
    alert("Please select your gender");
    return;
  }

  // Email validation
  if (userEmail === "") {
    alert("Please enter your email");
    return;
  }

  if (!validateEmail(userEmail)) {
    alert("Please enter a valid email address");
    return;
  }

  // Success
  alert("Registration successful!");

  form.reset();
});

// Email validation function
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
