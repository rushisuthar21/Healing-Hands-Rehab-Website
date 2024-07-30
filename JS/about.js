// sticky-header
window.onscroll = function () {
  myFunction();
};

// scrollUp
var scrollTop = document.getElementById("scrollUp");
var header = document.getElementById("header");
var sticky = header.offsetTop;

scrollTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
    scrollTop.style.transition = "all .4s ease-in-out";
  } else {
    scrollTop.style.display = "none";
  }
}

// hamburger

// news
$(document).ready(function () {
  $(".news_carousel").owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      520: {
        items: 2,
      },
      720: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

// sponser
$(document).ready(function () {
  $(".gallery_carousel").owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    autoplay: true,
    center: true,
    responsiveClass: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    navText: [
      '<i class="las la-angle-left"></i>',
      '<i class="las la-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

$(".testimonial-slider").owlCarousel({
  loop: true,
  dots: false,
  margin: 15,
  autoplay: true,
  autoplayTimeout: 2500,
  navText: [
    '<i class="las la-angle-left"></i>',
    '<i class="las la-angle-right"></i>',
  ],
  nav: true,
  items: 2,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    769: {
      items: 2,
    },
    1024: {
      items: 2,
    },
    1440: {
      items: 2,
    },
  },
});

// sponser
$(document).ready(function () {
  $(".sponser_carousel").owlCarousel({
    items: 5,
    loop: true,
    margin: 15,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});

// fancy box
Fancybox.bind("#gallery a", {
  groupAll: true,
});

var ham_open = document.querySelector(".hamburger_open");
var ham_close = document.querySelector(".hamburger_close");
var ham_sidebar = document.querySelector(".sidebar");

ham_open.addEventListener("click", (event) => {
  ham_sidebar.classList.add("sidebar_header");
});

ham_close.addEventListener("click", (event) => {
  ham_sidebar.classList.toggle("sidebar_header");
});
