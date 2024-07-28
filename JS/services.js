$(document).ready(function() {
    $('#search-icon').on('click', function() {
        var query = $('#search-input').val().toLowerCase();
        $('.service-card').each(function() {
            var serviceTitle = $(this).find('h3').text().toLowerCase();
            var serviceDescription = $(this).find('p').text().toLowerCase();
            if(query==""){
                $(this).show();
            }
            else if (serviceTitle.includes(query) || serviceDescription.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Optional: Enable search on "Enter" key press
    $('#search-input').on('keypress', function(e) {
        
            $('#search-icon').click();
    
    });
    $('#search-input').on('keydown', function(e) {
        
        $('#search-icon').click();

});
});

