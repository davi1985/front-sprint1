const iconMobile = document.querySelector(".header__menu");
const menuMobile = document.querySelector(".mobile");

function handleMenu() {
  iconMobile.classList.toggle("active");
  menuMobile.classList.toggle("active");
}

iconMobile.onclick = () => handleMenu();
