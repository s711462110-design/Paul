const navbar = document.querySelector('.navbar');

function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });
