// Function to validate form data
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting immediately

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validate that passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // Basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // All validations passed, submit the form
 // alert("Account created successfully!");
  // You can replace the alert with form submission if needed
   window.location.href = "welcome.html";
  return true;
}
