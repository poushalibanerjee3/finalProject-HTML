let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

 const blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 700,

    navigation: {
      nextEl: ".blog-next",
      prevEl: ".blog-prev",
    },

    pagination: {
      el: ".blog-pagination",
      type: "fraction",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 24,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });