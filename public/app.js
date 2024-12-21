const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");
const navbarHamburger = document.getElementById("navbar-hamburger");
const navLinks = document.querySelectorAll(".flex a");

// Toggle navbar on hamburger button click
hamburgerButton.addEventListener("click", (event) => {
  event.stopPropagation();
  navbarHamburger.classList.add("active");
  navbarHamburger.slider.classList.add("slide");
});

// / Close navbar when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarHamburger.classList.remove("active");
  });
});

// Close navbar when clicking outside
document.addEventListener("click", (event) => {
  if (
    !navbarHamburger.contains(event.target) &&
    !hamburgerButton.contains(event.target)
  ) {
    navbarHamburger.classList.remove("active");
  }
});

// Stop propagation for close button
if (closeButton) {
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    navbarHamburger.classList.remove("active");
  });
}

// Show button when scrolled down
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// This is responsible to disaply the back to top blue button
backToTopButton.addEventListener("click", () => {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
});

window.onscroll = function () {
  changeNavbarColor();
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the page from refreshing on form submission

    // Clear the form fields instantly
    document.getElementById("contact-form").reset();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      reply_to: document.getElementById("email").value,
    };

    const SERVICEID = "service_skpa4zk";
    const TEMPLATEID = "template_zvtymtm";

    // Send the email via emailjs
    emailjs
      .send(SERVICEID, TEMPLATEID, templateParams)
      .then((res) => {
        console.log(res);
        // alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        // alert("Something went wrong. Please try again.");
      });
  });
