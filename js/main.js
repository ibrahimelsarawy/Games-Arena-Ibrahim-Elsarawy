$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    slideBy: 3,
    dots: false,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });
});

$(".main-nav.owl-prev").click(function () {
  $(".owl-carousel").trigger("prev.owl.carousel", [300]);
});

$(".main-nav.owl-next").click(function () {
  $(".owl-carousel").trigger("next.owl.carousel", [300]);
});

$(document).ready(function () {
  $(".top-slider").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 0,
    autoplaySpeed: 5000,
    autoplayHoverPause: false,
    smartSpeed: 5000,
    slideTransition: "linear",
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 },
      1400: { items: 12 },
    },
  });

  $(".bottom-slider").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 0,
    autoplaySpeed: 5000,
    autoplayHoverPause: false,
    smartSpeed: 5000,
    slideTransition: "linear",
    rtl: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 },
      1400: { items: 12 },
    },
  });
});
