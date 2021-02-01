window.addEventListener("DOMContentLoaded", () => {
  /* Show or hide mobile menu --- start */
  const hamburgerMenu = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");
  const menuItem = document.querySelectorAll(".menu_item");
  const nav = document.querySelector("nav");

  const showHideHamburger = () => {
    hamburgerMenu.classList.toggle("hamburger_active");
    navMenu.classList.toggle("menu_active");
  };
  nav.addEventListener("click", (e) => {
    if (e.target === nav) {
      hamburgerMenu.classList.remove("hamburger_active");
      navMenu.classList.remove("menu_active");
    }
  });
  hamburgerMenu.addEventListener("click", () => {
    showHideHamburger();
  });

  menuItem.forEach((item) =>
    item.addEventListener("click", () => {
      showHideHamburger();
    })
  );
  /* Show or hide mobile menu --- end */
});
