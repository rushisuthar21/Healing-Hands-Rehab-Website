$(document).ready(function() {
    console.log("jQuery is working"); // Debug line

    // Add fade-in effect on page load
    $('body').addClass('loaded');

    // Handle form submission
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();
        console.log("Form submitted"); // Debug line

        let isValid = true;

        // Validate each input
        $('#signupForm input').each(function() {
            if (!validateInput($(this))) {
                isValid = false;
            }
        });

        if (isValid) {
            // Simulate successful signup
            console.log('Signup attempt:', {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                password: $('#password').val()
            });
            redirectToHome();
        }
    });

    function redirectToHome() {
        alert("Signup successful! Redirecting to home page.");
        window.location.href = 'index.html';
    }

    function validateInput(input) {
        const value = input.val().trim();
        let isValid = true;
        let errorMessage = '';

        switch(input.attr('id')) {
            case 'firstName':
            case 'lastName':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Must be at least 2 characters long';
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'phone':
                if (!/^\d{10}$/.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid 10-digit phone number';
                }
                break;
            case 'password':
                if (value.length < 8) {
                    isValid = false;
                    errorMessage = 'Password must be at least 8 characters long';
                }
                break;
        }

        if (!isValid) {
            showError(input, errorMessage);
        } else {
            clearError(input);
        }

        return isValid;
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

    function clearError(input) {
        const formControl = input.parent();
        const errorElement = formControl.find('.error-message');
        if (errorElement.length) {
            errorElement.remove();
        }
        input.removeClass('error');
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