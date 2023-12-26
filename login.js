function validateLogin() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  // Reset error messages
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  var storedEmail = localStorage.getItem('email');
  var storedPassword = localStorage.getItem('password');

  // Check if email is empty
  if (email === '') {
    document.getElementById('emailError').textContent = 'Please enter Email';
    return false;
  }

  // Check if password is empty
  if (password === '') {
    document.getElementById('passwordError').textContent = 'Please enter Password';
    return false;
  }

  // Check if email and password match stored values
  if (email !== storedEmail || password !== storedPassword) {
    document.getElementById('passwordError').textContent = 'Incorrect email or password';
    return false;
  }

  // Display custom alert message
  var customAlertMessage = document.getElementById("customAlertMessage");
  customAlertMessage.innerHTML = "Successfully Logged In";

  // Show the custom alert modal
  $('#customAlertModal').modal('show');

  return false; // Prevent form submission
}


function redirect() {
 
  window.location.href = 'index.html';
}



