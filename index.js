
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize error flags
    let emailValid = validateEmail(email);
    let passwordValid = validatePassword(password);

    // If both email and password are valid, submit the form
    if (emailValid && passwordValid) {
      
        // Create data object to send
      const loginData = {
        username: email,
        password: password
      };

      // Send POST request to the API
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
      .then(response => response.json())
      .then(data => {
        // Simulating success based on a condition (since the API is a placeholder)
        if (data.id) {
          showAlert("Login successful!", 'success');
        } else {
          showAlert("Login failed. Please check your credentials.", 'error');
        }
      })
      .catch(error => {
        showAlert("An error occurred. Please try again later.", 'error');
        console.error("Error:", error);
      });
    }
  });

  function validateEmail(email) {
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
      emailError.innerText = "Email field cannot be empty.";
      emailError.style.display = "block";
      return false;
    } else if (!email.match(emailPattern)) {
      emailError.innerText = "Please enter a valid email.";
      emailError.style.display = "block";
      return false;
    } else {
      emailError.style.display = "none";
      return true;
    }
  }

  function validatePassword(password) {
    const passwordError = document.getElementById('passwordError');

    if (password === "") {
      passwordError.innerText = "Password cannot be empty.";
      passwordError.style.display = "block";
      return false;
    } else if (password.length < 6) {
      passwordError.innerText = "Password must be at least 6 characters long.";
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.style.display = "none";
      return true;
    }
  }
  // index.js// index.js
document.getElementById('togglePasswordButton').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var button = document.getElementById('togglePasswordButton');

    // Toggle between password and text field
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        button.innerText = '🔓'; // Change button text to "Hide"
    } else {
        passwordField.type = 'password';
        button.innerText = '🔒'; // Change button text to "Show"
    }
});



  function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');
    alertBox.innerText = message;

    // Set the background color based on the type (success or error)
    if (type === 'success') {
      alertBox.classList.remove('error');
      alertBox.style.backgroundColor = '#4CAF50'; // Success - green
    } else {
      alertBox.classList.add('error');
      alertBox.style.backgroundColor = '#f44336'; // Error - red
    }

    // Display the alert
    alertBox.style.display = 'block';

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      alertBox.style.display = 'none';
      document.getElementById('email').value = "";
      document.getElementById('password').value = "";
    }, 3000);


  }




