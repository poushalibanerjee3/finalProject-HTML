let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});