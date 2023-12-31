// Adding inline style order(for CSS animation delay)

// Step 1: Select the parent element
const textSvg = document.querySelector("#text-svg");

// Step 2: Select all the child elements within the parent using querySelectorAll
const svgLetters = document.querySelectorAll("#text-svg path");
console.log(svgLetters);

// Step 3: Use forEach to apply inline style with --order to each child element
svgLetters.forEach((letter, index) => {
  // Step 4: Set the value of --order based on some conditions or calculations
  const orderValue = index + 1; // For example, using the index as the order value

  // Step 5: Apply the inline style with --order to the child element
  letter.style.setProperty("--order", orderValue);
});

const searchField = document.querySelector("#search-wrapper");
const searchIcon = document.querySelector("#search-wrapper #search-icon");
const search = document.querySelector("#search");
const headerOverlay = document.querySelector("#header-overlay");
const quickAppsBtn = document.querySelector("#apps");
const quickApps = document.querySelector(".quickactions-icon");
const userToggler = document.querySelector("#user-container");
const userDropdown = document.querySelector("#dropdown-container");

search.addEventListener("focus", () => {
  search.classList.add("search-toggled");
  searchIcon.classList.add("icon-hide");
  headerOverlay.classList.add("header-overlay-show");
});
search.addEventListener("blur", () => {
  search.classList.remove("search-toggled");
  searchIcon.classList.remove("icon-hide");
  headerOverlay.classList.remove("header-overlay-show");
});

quickAppsBtn.addEventListener("click", () => {
  quickApps.classList.toggle("mobileDisplay");
});

userToggler.addEventListener("click", () => {
  userDropdown.classList.toggle("dropdown-show");
});

const navlinksWrapper = document.querySelector(".nav-content");
const navlinks = document.querySelectorAll(".nav-content .nav-links");

navlinks.forEach((link, index) => {
  const linkOrder = index + 1;

  link.style.setProperty("--link-order", linkOrder);
});

//menu btn
const menuBtn = document.querySelector("#menuOpen");
const menuClose = document.querySelector("#menuClose");
const sideNav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  sideNav.classList.add("sidenavToggled");
  menuClose.classList.add("toggler-animate");
});

menuClose.addEventListener("click", () => {
  menuClose.classList.remove("toggler-animate");
  sideNav.classList.remove("sidenavToggled");
});

//cards
//just for animation delay

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  const cardNumber = index + 1;

  card.style.setProperty("--card", cardNumber);
});
