$(document).ready(function() {
    $('#search-icon').on('click', function() {
        var query = $('#search-input').val().toLowerCase();
        $('.post-box').each(function() {
            var blogTitle = $(this).find('h2').text().toLowerCase();
            var blogDescription = $(this).find('p').text().toLowerCase();
            if(query==""){
                $(this).show();
            }
            else if (blogTitle.includes(query) || blogDescription.includes(query)) {
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
