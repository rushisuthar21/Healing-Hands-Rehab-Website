// Wait until the DOM content is fully loaded before executing the script
$(document).ready(function() {
    // Attach a click event listener to each FAQ question
    $('.faq-question').click(function() {
        // Toggle the visibility of the next element with the class 'faq-answer' (slide up/down)
        $(this).next('.faq-answer').slideToggle();
        // Toggle the 'open' class on the parent element with the class 'faq-item'
        $(this).parent('.faq-item').toggleClass('open');
    });
});

// Function to toggle the 'active' class on the parent element of the clicked element
function toggleAnswer(element) {
    // Get the parent element of the clicked element
    const faqItem = element.parentElement;
    // Toggle the 'active' class on the parent element
    faqItem.classList.toggle('active');
}
