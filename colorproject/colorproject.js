let menu = document.querySelector("#mobile-menu");
let menuLinks = document. querySelector(".navbar_menu");

let mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);