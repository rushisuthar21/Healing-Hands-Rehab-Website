// Sticky header functionality
window.onscroll = function () {
  myFunction(); // Call the function to handle sticky header and scroll-up button visibility
};

// Scroll-up button setup
var scrollTop = document.getElementById("scrollUp"); // Scroll-up button element
var header = document.getElementById("header"); // Header element
var sticky = header.offsetTop; // Position where header becomes sticky

// Scroll-up button click event listener
scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Function to manage sticky header and scroll-up button visibility
function myFunction() {
  // Check if page has been scrolled past the header
  if (window.scrollY > sticky) {
    header.classList.add("sticky"); // Add sticky class to header
  } else {
    header.classList.remove("sticky"); // Remove sticky class from header
  }

  // Show or hide the scroll-up button based on scroll position
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block"; // Show scroll-up button
    scrollTop.style.transition = "all .4s ease-in-out"; // Smooth transition
  } else {
    scrollTop.style.display = "none"; // Hide scroll-up button
  }
}

// News carousel setup using Owl Carousel
$(document).ready(function () {
  $(".news_carousel").owlCarousel({
    items: 4, // Number of items to display
    loop: true, // Enable infinite looping
    margin: 15, // Margin between items
    autoplay: true, // Enable auto-play
    responsiveClass: true, // Enable responsive settings
    autoplayTimeout: 2000, // Auto-play interval
    autoplayHoverPause: true, // Pause on hover
    navText: [
      '<i class="las la-angle-left"></i>', // Left navigation icon
      '<i class="las la-angle-right"></i>', // Right navigation icon
    ],
    responsive: {
      0: {
        items: 1, // Number of items on extra small screens
      },
      520: {
        items: 2, // Number of items on small screens
      },
      720: {
        items: 3, // Number of items on medium screens
      },
      1200: {
        items: 4, // Number of items on large screens
      },
    },
  });
});

// Sponsor carousel setup using Owl Carousel
$(document).ready(function () {
  $(".gallery_carousel").owlCarousel({
    items: 4, // Number of items to display
    loop: true, // Enable infinite looping
    margin: 15, // Margin between items
    autoplay: true, // Enable auto-play
    center: true, // Center the active item
    responsiveClass: true, // Enable responsive settings
    autoplayTimeout: 1500, // Auto-play interval
    autoplayHoverPause: true, // Pause on hover
    navText: [
      '<i class="las la-angle-left"></i>', // Left navigation icon
      '<i class="las la-angle-right"></i>', // Right navigation icon
    ],
    responsive: {
      0: {
        items: 1, // Number of items on extra small screens
      },
      540: {
        items: 2, // Number of items on small screens
      },
      600: {
        items: 3, // Number of items on medium screens
      },
      1200: {
        items: 4, // Number of items on large screens
      },
    },
  });
});

// Testimonial slider setup using Owl Carousel
$(".testimonial-slider").owlCarousel({
  loop: true, // Enable infinite looping
  dots: false, // Disable dots navigation
  margin: 15, // Margin between items
  autoplay: true, // Enable auto-play
  autoplayTimeout: 2500, // Auto-play interval
  navText: [
    '<i class="las la-angle-left"></i>', // Left navigation icon
    '<i class="las la-angle-right"></i>', // Right navigation icon
  ],
  nav: true, // Enable navigation
  items: 2, // Number of items to display
  responsive: {
    0: {
      items: 1, // Number of items on extra small screens
    },
    576: {
      items: 1, // Number of items on small screens
    },
    769: {
      items: 2, // Number of items on medium screens
    },
    1024: {
      items: 2, // Number of items on large screens
    },
    1440: {
      items: 2, // Number of items on extra-large screens
    },
  },
});

// Sponsor carousel setup using Owl Carousel (duplicate)
$(document).ready(function () {
  $(".sponser_carousel").owlCarousel({
    items: 5, // Number of items to display
    loop: true, // Enable infinite looping
    margin: 15, // Margin between items
    autoplay: true, // Enable auto-play
    responsiveClass: true, // Enable responsive settings
    autoplayTimeout: 1500, // Auto-play interval
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: {
        items: 1, // Number of items on extra small screens
      },
      540: {
        items: 2, // Number of items on small screens
      },
      600: {
        items: 4, // Number of items on medium screens
      },
      1200: {
        items: 5, // Number of items on large screens
      },
    },
  });
});

// FancyBox setup for gallery
Fancybox.bind("#gallery a", {
  groupAll: true, // Group all gallery items
});

// Hamburger menu setup
var ham_open = document.querySelector(".hamburger_open"); // Hamburger menu open button
var ham_close = document.querySelector(".hamburger_close"); // Hamburger menu close button
var ham_sidebar = document.querySelector(".sidebar"); // Sidebar element

// Event listener for opening the sidebar
ham_open.addEventListener("click", (event) => {
  ham_sidebar.classList.add("sidebar_header"); // Add class to show sidebar
});

// Event listener for closing the sidebar
ham_close.addEventListener("click", (event) => {
  ham_sidebar.classList.toggle("sidebar_header"); // Toggle class to hide/show sidebar
});
