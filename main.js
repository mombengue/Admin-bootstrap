
var showNav = document.querySelector('#_showNavigation');
var closeNav = document.querySelector('#_closeNavigation');
var openNav = document.querySelector('#_sidebar');
var main = document.querySelector('main');

showNav.addEventListener('click', (event) => {
    openNav.style.display = 'none';
    main.style.marginLeft = '0px';
    closeNav.style.display = 'block';
    showNav.style.display = 'none';
});

closeNav.addEventListener('click', (event) => {
    openNav.style.display = 'block';
    main.style.marginLeft = '200px';
    closeNav.style.display = 'none';
    showNav.style.display = 'block';
});

