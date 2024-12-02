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
