window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let carousel = document.querySelector("#carouselExampleControls");

    if (window.scrollY > (carousel.clientHeight /2)+100) {
        navbar.classList.add("fixed-top", "shadow");
    } else {
        navbar.classList.remove("fixed-top", "shadow");
    }
});


(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    if (this.checkValidity()) {
      // Reset the form after a slight delay to ensure Bootstrap validation is triggered
      setTimeout(() => {
        this.reset(); // Clear the form fields
        this.classList.remove("was-validated"); // Reset validation styling
      }, 100);

      alert("Message sent successfully!"); // Optional: Confirmation message
    }

    // Add Bootstrap validation styling
    this.classList.add("was-validated");
  });