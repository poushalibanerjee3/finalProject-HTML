let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });