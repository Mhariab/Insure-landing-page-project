function toggleMenu() {
  const navBar = document.getElementById("nav-bar");
  const cancelBtn = document.getElementById("cancel-btn");
  const navLinks = document.getElementById("nav-links");

  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    navBar.style.display = "inline";
    cancelBtn.style.display = "none";
  } else {
    navLinks.classList.add("active");
    navBar.style.display = "none";
    cancelBtn.style.display = "inline";
  }
}
// Select the elements
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
// Add event listener to the menu button
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
