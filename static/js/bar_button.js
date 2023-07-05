let menuToggle = document.querySelector('.barra-item');
let menu = document.getElementById('nav');

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle('show');
});