$(".banners-main").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navSpeed: 800,
  dotsSpeed: 800,
  dragEndSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".exclusive-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 1000,
  dragEndSpeed: 800,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

$(".suggested-products").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 1000,
  dragEndSpeed:700,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2.5,
    },
    800: {
      items: 2.5,
    },
    1000: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});

// change nav icon for banners-main
document.querySelector(".banners-main .owl-prev").innerHTML = `<i class="fa-solid fa-angle-left fa-2x"></i>`;
document.querySelector(".banners-main .owl-next").innerHTML = `<i class="fa-solid fa-angle-right fa-2x"></i>`;