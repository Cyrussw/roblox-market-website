const burger = document.getElementById('burger');
const navbarMenu = document.getElementById('navbarMenu');

burger.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});