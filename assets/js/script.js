let hamburger = document.querySelector('.hamburger-menu');
let menuLink = document.querySelector('#dropdownMenu');

hamburger.addEventListener('click', function() {
    menuLink.classList.toggle('active');
});