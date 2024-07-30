function validateForm() {
        var isValid = true;

            // Validate name
            var name = document.getElementById("name").value;
            var nameError = document.getElementById("nameError");
            if (name.trim() === "") {
                nameError.style.display = "inline";
                isValid = false;
            } else {
                nameError.style.display = "none";
            }

            // Validate email
            var email = document.getElementById("email").value;
            var emailError = document.getElementById("emailError");
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                emailError.style.display = "inline";
                isValid = false;
            } else {
                emailError.style.display = "none";
            }

            // Validate subject
            var subject = document.getElementById("subject").value;
            var subjectError = document.getElementById("subjectError");
            if (subject.trim() === "") {
                subjectError.style.display = "inline";
                isValid = false;
            } else {
                subjectError.style.display = "none";
            }

            // Validate message
            var message = document.getElementById("message").value;
            var messageError = document.getElementById("messageError");
            if (message.trim() === "") {
                messageError.style.display = "inline";
                isValid = false;
            } else {
                messageError.style.display = "none";
            }

            return isValid;
}