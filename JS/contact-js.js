// Get the modal and close modal button
var modal = document.getElementById("success-modal");

var closeModal = document.getElementById("closeModal")

// Regex for email
var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Regex for phone
var specialCharRegex = /[.!@#$%^&*()_+-={|}~-]/;

// Get form
var form = document.getElementById("contactPageForm");

// Validate name form value
function validateName(name) {
  if (name == null || name == "") {
    alert("Please enter your full name to proceed.");
    document.getElementById("fullName").style.border = "solid";
    document.getElementById("fullName").style.borderColor = "red";
    return false;
  } else if (name.match(/\d+/g) !== null) {
    alert("Name has numeric values.");
    document.getElementById("fullName").style.border = "solid";
    document.getElementById("fullName").style.borderColor = "red";
    return false;
  } else if (name.match(specialCharRegex) !== null) {
    alert("Name has special characters.");
    document.getElementById("fullName").style.border = "solid";
    document.getElementById("fullName").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
};

// Validate email form value
function validateEmail(email) {
  if (email == null || email == "") {
    alert("Please enter your email to proceed.");
    document.getElementById("email").style.border = "solid";
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else if (email.match(validEmailRegex) == null) {
    alert("Entered email is not valid.");
    document.getElementById("email").style.border = "solid";
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
};

// Validate phone form value
function validatePhone(phone) {
  if (phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) == null) {
    alert("Entered mobile number is not valid.");
    document.getElementById("phone").style.border = "solid";
    document.getElementById("phone").style.borderColor = "red";
    return false;
  } else {
    return true;
  }
};

// Display modal function
function callModal() {
  modal.style.display = "block";
};

// Reset borders of name form input
function resetBordersFullName(){
  document.getElementById("fullName").style.border = "none";
};

// Reset borders of email form input
function resetBordersEmail() {
  document.getElementById("email").style.border = "none";
};

// Reset borders of phone form input
function resetBordersPhone() {
  document.getElementById("phone").style.border = "none";
};

// Submit form event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const data = new FormData(e.target);
    console.log(data.get("phone"));
    if (validateName(data.get("fullName")) == false || validateEmail(data.get("email")) == false || (data.get("phone") !== "" && validatePhone(data.get("phone")) == false)) {
      return false;
    } else {
      callModal();
    }
  });

// Close modal when user clicks the close button
closeModal.onclick = function() {
  modal.style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("fullName").value = "";
  document.getElementById("msg").value = "";
}

// Close modal when user clicks anywhere outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}