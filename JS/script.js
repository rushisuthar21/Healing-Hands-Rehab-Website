$(document).ready(function() {
    // Add a class 'loaded' to the body on page load to trigger fade-in effect (assuming CSS handles this)
    $('body').addClass('loaded');

    // Handle form submission for the login form
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get and trim the email and password values from the form
        const email = $('#email').val().trim();
        const password = $('#password').val();

        // Validate the email address using a custom function
        if (!isValidEmail(email)) {
            // Show error message if email is invalid
            showError($('#email'), 'Please enter a valid email address.');
            return;
        }

        // Validate the password length
        if (password.length < 8) {
            // Show error message if password is too short
            showError($('#password'), 'Password must be at least 8 characters long.');
            return;
        }

        // Simulate a successful login (for demo purposes)
        console.log('Login attempt:', { email, password });
        simulateLogin(); // Redirect to another page after successful validation
    });

    // Function to simulate a successful login and redirect
    function simulateLogin() {
        window.location.href = 'index.html'; // Redirect to 'index.html'
    }

    // Function to validate email address format using a regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pattern for a basic email validation
        return emailRegex.test(email); // Return true if email matches the regex, false otherwise
    }

    // Function to show an error message for a form input
    function showError(input, message) {
        const formControl = input.parent(); // Get the parent element of the input
        let errorElement = formControl.find('.error-message'); // Find existing error message element

        // If no error message element exists, create a new one
        if (!errorElement.length) {
            errorElement = $('<div class="error-message"></div>'); // Create a new div with the class 'error-message'
            formControl.append(errorElement); // Append the error message to the parent element
        }

        // Set the error message text and add an error class to the input
        errorElement.text(message);
        input.addClass('error');
    }

    // Handle fade-out effect for page transitions when clicking internal links
    $('a').on('click', function(e) {
        // Check if the clicked link is internal (same hostname)
        if (this.hostname === window.location.hostname) {
            e.preventDefault(); // Prevent the default link behavior
            const href = this.href; // Get the href attribute of the clicked link
            $('body').fadeOut(500, function() {
                window.location.href = href; // Redirect to the new page after fading out
            });
        }
    });
});
