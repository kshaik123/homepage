// Toggle between Login and Register forms
document.getElementById("show-register").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// Handle Login Form Submission
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Perform login validation (to be connected to backend later)
  if (email && password) {
    alert("Login successful!");
    // Redirect to home page
    window.location.href = "index.html"; // Redirect to the main page
  } else {
    alert("Please fill in all fields.");
  }
});

// Handle Register Form Submission
document.getElementById("register").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Perform registration validation (to be connected to backend later)
  if (name && email && password) {
    alert("Registration successful! Please login.");
    // Switch to login form
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    // Optionally, redirect to the main page after registration
    // window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
});
