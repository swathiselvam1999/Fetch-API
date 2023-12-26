function validateForm() {
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Reset error messages
  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  if (username === "") {
    document.getElementById("usernameError").innerText = "Username is required";
    return false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    return false;
  } else if (!validateEmail(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email";
    return false;
  }

  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is required";
    return false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").innerText = "Password length must have at least 8 characters";
    return false;
  }

  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").innerText = "Confirm password is required";
    return false;
  }

  if (password !== confirmPassword) {
    document.getElementById("passwordError").innerText = "Passwords do not match";
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    return false;
  }

  // Store user details in local storage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Display custom alert message
  var customAlertMessage = document.getElementById("customAlertMessage");
  customAlertMessage.innerHTML = "Successfully Signed In";

  // Show the custom alert modal
  $('#customAlertModal').modal('show');

  // Prevent form submission
  return false;
}

function redirect() {
  window.location.href = 'login.html';
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};