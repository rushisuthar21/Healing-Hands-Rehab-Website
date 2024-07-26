$(document).ready(function() {
    // Add fade-in effect on page load
    $('body').addClass('loaded');

    // Handle form submission
    $('#forgotPasswordForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('#email').val();

        // Simulate password reset request
        console.log('Password reset requested for:', email);
        alert('If an account exists for ' + email + ', you will receive a password reset link shortly.');
        
        // Clear the form
        $('#forgotPasswordForm')[0].reset();
    });

    // Add fade-out effect to page transitions
    $('a').on('click', function(e) {
        if (this.hostname === window.location.hostname) {
            e.preventDefault();
            $('body').fadeOut(500, function() {
                window.location.href = e.target.href;
            });
        }
    });
});
