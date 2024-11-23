const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");
const navbarHamburger = document.getElementById("navbar-hamburger");

// Toggle navbar on hamburger button click
hamburgerButton.addEventListener("click", () => {
  navbarHamburger.classList.add("active");
  navbarHamburger.slider.classList.add("slide");
});

// Close navbar on close button click
closeButton.addEventListener("click", () => {
  navbarHamburger.classList.remove("active");
});
