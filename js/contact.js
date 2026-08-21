let toggler = document.getElementById("toggler");
let mobileMenu = document.getElementById("mobileMenu");

toggler.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// form validation

$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Remove previous errors
    $(".error").remove();

    // Get values
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let subject = $("#subject").val().trim();
    let message = $("#message").val().trim();

    // Name validation
    let namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
      $("#name").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Name is required.</span>',
      );
      isValid = false;
    } else if (!namePattern.test(name)) {
      $("#name").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Please enter a valid name.</span>',
      );
      isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $("#email").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Email is required.</span>',
      );
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Please enter a valid email address.</span>',
      );
      isValid = false;
    }

    // Subject validation
    if (subject === "") {
      $("#subject").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Subject is required.</span>',
      );
      isValid = false;
    }

    // Message validation
    if (message === "") {
      $("#message").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Message is required.</span>',
      );
      isValid = false;
    } else if (message.length < 10) {
      $("#message").after(
        '<span class="error mt-[5px] block text-[14px] text-red-600">Message must be at least 10 characters.</span>',
      );
      isValid = false;
    }

    // If everything is valid
    if (isValid) {
      alert("Form submitted successfully!");

      // You can submit the form to the server here
      // this.submit();
    }
  });

  // Remove Name error while typing
  $("#name").on("input", function () {
    $(this).next(".error").remove();
  });

  // Remove Email error while typing
  $("#email").on("input", function () {
    $(this).next(".error").remove();
  });

  // Remove Subject error while typing
  $("#subject").on("input", function () {
    $(this).next(".error").remove();
  });

  // Remove Message error while typing
  $("#message").on("input", function () {
    $(this).next(".error").remove();
  });
});
