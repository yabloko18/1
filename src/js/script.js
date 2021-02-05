// бургер
let burgerButton = document.querySelector('.burger'),
    mobileNav = document.querySelector('.mobile-nav__menu'),
    bodyLock = document.querySelector('body');

burgerButton.onclick = function mobileMenu() {
    mobileNav.classList.toggle('vis');
    burgerButton.classList.toggle('vis');
    bodyLock.classList.toggle('lock');
}

//слайдер
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
    });
});

// Фильтр
let filterBox = document.querySelectorAll('.card');
document.querySelector('.nav-container').addEventListener('click', (event)=> {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    filterBox.forEach( elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide')
        }
    });
});