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
