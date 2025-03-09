function toggleMenu() {
  const navLinks = document.querySelector(".nav__links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.backgroundColor = "#344e41";
    navLinks.style.padding = "1rem";
    navLinks.style.borderRadius = "5px";
  }
}
