$(document).ready(function() {
    // Attach a click event listener to the search icon
    $('#search-icon').on('click', function() {
        // Get the search query and convert it to lowercase
        var query = $('#search-input').val().toLowerCase();

        // Iterate over each service card to filter based on the search query
        $('.service-card').each(function() {
            // Get the title and description of the service card and convert them to lowercase
            var serviceTitle = $(this).find('h3').text().toLowerCase();
            var serviceDescription = $(this).find('p').text().toLowerCase();

            // Show all service cards if the search query is empty
            if(query === ""){
                $(this).show();
            } 
            // Show the service card if the title or description includes the search query
            else if (serviceTitle.includes(query) || serviceDescription.includes(query)) {
                $(this).show();
            } 
            // Hide the service card if neither the title nor description includes the search query
            else {
                $(this).hide();
            }
        });
    });

    // Optional: Enable search functionality on pressing the "Enter" key
    $('#search-input').on('keypress', function(e) {
        // Trigger a click event on the search icon when "Enter" is pressed
        if (e.which === 13) { // Check if the "Enter" key (key code 13) is pressed
            $('#search-icon').click();
        }
    });

    // Optional: Enable search functionality on pressing any key down
    $('#search-input').on('keydown', function(e) {
        // Trigger a click event on the search icon when any key is pressed
        $('#search-icon').click();
    });
});
