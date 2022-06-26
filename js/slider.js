var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop:true,
  });