$(document).ready(function() {
    // Add fade-in effect on page load
    $('body').addClass('loaded');

    // Handle form submission
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        const email = $('#email').val().trim();
        const password = $('#password').val();

        // Validate email
        if (!isValidEmail(email)) {
            showError($('#email'), 'Please enter a valid email address.');
            return;
        }

        // Validate password
        if (password.length < 8) {
            showError($('#password'), 'Password must be at least 8 characters long.');
            return;
        }

        // Simulate successful login
        console.log('Login attempt:', { email, password });
        simulateLogin();
    });
        function simulateLogin() {
            window.location.href = 'index.html';
        }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(input, message) {
        const formControl = input.parent();
        let errorElement = formControl.find('.error-message');
        if (!errorElement.length) {
            errorElement = $('<div class="error-message"></div>');
            formControl.append(errorElement);
        }
        errorElement.text(message);
        input.addClass('error');
    }

    // Add fade-out effect to page transitions
    $('a').on('click', function(e) {
        if (this.hostname === window.location.hostname) {
            e.preventDefault();
            const href = this.href;
            $('body').fadeOut(500, function() {
                window.location.href = href;
            });
        }
    });
});