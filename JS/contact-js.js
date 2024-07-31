// Get the modal element and the close button for the modal
var modal = document.getElementById("success-modal");
var closeModal = document.getElementById("closeModal");

// Regex pattern for validating email addresses
var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Regex pattern for detecting special characters
var specialCharRegex = /[.!@#$%^&*()_+-={|}~-]/;

// Get the form element
var form = document.getElementById("contactPageForm");

// Validate the name input
function validateName(name) {
  if (name == null || name === "") {
    // Alert if name is empty
    alert("Please enter your full name to proceed.");
    document.getElementById("fullName").style.border = "solid"; // Highlight input with border
    document.getElementById("fullName").style.borderColor = "red"; // Set border color to red
    return false;
  } else if (name.match(/\d+/g) !== null) {
    // Alert if name contains numeric values
    alert("Name has numeric values.");
    document.getElementById("fullName").style.border = "solid"; // Highlight input with border
    document.getElementById("fullName").style.borderColor = "red"; // Set border color to red
    return false;
  } else if (name.match(specialCharRegex) !== null) {
    // Alert if name contains special characters
    alert("Name has special characters.");
    document.getElementById("fullName").style.border = "solid"; // Highlight input with border
    document.getElementById("fullName").style.borderColor = "red"; // Set border color to red
    return false;
  } else {
    return true; // Name is valid
  }
}

// Validate the email input
function validateEmail(email) {
  if (email == null || email === "") {
    // Alert if email is empty
    alert("Please enter your email to proceed.");
    document.getElementById("email").style.border = "solid"; // Highlight input with border
    document.getElementById("email").style.borderColor = "red"; // Set border color to red
    return false;
  } else if (email.match(validEmailRegex) == null) {
    // Alert if email is not valid
    alert("Entered email is not valid.");
    document.getElementById("email").style.border = "solid"; // Highlight input with border
    document.getElementById("email").style.borderColor = "red"; // Set border color to red
    return false;
  } else {
    return true; // Email is valid
  }
}

// Validate the phone number input
function validatePhone(phone) {
  // Regex for validating phone numbers with optional international code and various formats
  if (phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) == null) {
    // Alert if phone number is not valid
    alert("Entered mobile number is not valid.");
    document.getElementById("phone").style.border = "solid"; // Highlight input with border
    document.getElementById("phone").style.borderColor = "red"; // Set border color to red
    return false;
  } else {
    return true; // Phone number is valid
  }
}

// Function to display the success modal
function callModal() {
  modal.style.display = "block"; // Show the modal
}

// Reset border style for the name input field
function resetBordersFullName() {
  document.getElementById("fullName").style.border = "none"; // Remove border
}

// Reset border style for the email input field
function resetBordersEmail() {
  document.getElementById("email").style.border = "none"; // Remove border
}

// Reset border style for the phone input field
function resetBordersPhone() {
  document.getElementById("phone").style.border = "none"; // Remove border
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object to collect form data
    const data = new FormData(e.target);
    console.log(data.get("phone")); // Log the phone number to the console

    // Validate form fields and proceed if all are valid
    if (validateName(data.get("fullName")) === false ||
        validateEmail(data.get("email")) === false ||
        (data.get("phone") !== "" && validatePhone(data.get("phone")) === false)) {
      return false; // Stop if any validation fails
    } else {
      callModal(); // Display success modal if all validations pass
    }
  });

// Event listener for closing the modal when the close button is clicked
closeModal.onclick = function() {
  modal.style.display = "none"; // Hide the modal
  // Clear form inputs
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("fullName").value = "";
  document.getElementById("msg").value = "";
}

// Event listener for closing the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide the modal if the click is outside of it
  }
}
