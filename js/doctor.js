let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

$(document).ready(function () {
  $(".faq-question").click(function () {

    let currentAnswer = $(this).next(".faq-answer");
    let currentIcon = $(this).find(".faq-icon");

    // Close all other answers
    $(".faq-answer").not(currentAnswer).slideUp(300);

    // Reset all other icons
    $(".faq-icon").not(currentIcon).removeClass("rotate-180");

    // Toggle current answer
    currentAnswer.slideToggle(300);

    // Toggle current icon
    currentIcon.toggleClass("rotate-180");
  });
});