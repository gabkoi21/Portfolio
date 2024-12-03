const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");
const navbarHamburger = document.getElementById("navbar-hamburger");

// Toggle navbar on hamburger button click
hamburgerButton.addEventListener("click", (event) => {
  event.stopPropagation();
  navbarHamburger.classList.add("active");
  navbarHamburger.slider.classList.add("slide");
});

// Close navbar on close button click
closeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  navbarHamburger.classList.remove("active");
});

// Close navbar when clicking anywhere outside
document.addEventListener("click", (event) => {
  if (
    !navbarHamburger.contains(event.target) &&
    !hamburgerButton.contains(event.target)
  ) {
    navbarHamburger.classList.remove("active");
  }
});

// Show button when scrolled down
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Scroll to top on click
backToTopButton.addEventListener("click", () => {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
});

window.onscroll = function () {
  changeNavbarColor();
};

// this is for the blsck bg
// JavaScript to detect scroll and add/remove shadow
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
