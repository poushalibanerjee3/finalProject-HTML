let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

const blogCards = document.querySelectorAll(".blog-card");

const prevButton = document.getElementById("blogPrev");
const nextButton = document.getElementById("blogNext");
const pageButton = document.getElementById("blogPage");

const cardsPerPage = 6;

let currentPage = 1;

const totalPages = Math.ceil(blogCards.length / cardsPerPage);

function showPage(page) {
  currentPage = page;

  blogCards.forEach((card, index) => {
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    if (index >= start && index < end) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  pageButton.textContent = currentPage;

  // Previous button
  if (currentPage === 1) {
    prevButton.disabled = true;
    prevButton.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove("opacity-50", "cursor-not-allowed");
  }

  // Next button
  if (currentPage === totalPages) {
    nextButton.disabled = true;
    nextButton.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

prevButton.addEventListener("click", function () {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
});

nextButton.addEventListener("click", function () {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
});

showPage(1);
