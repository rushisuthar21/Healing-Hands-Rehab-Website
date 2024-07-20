
$(document).ready(function() {
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();
        $(this).parent('.faq-item').toggleClass('open');
    });
});

function toggleAnswer(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}