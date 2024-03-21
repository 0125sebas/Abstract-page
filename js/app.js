const dropdownMenu = document.getElementById('dropdown-menu');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');

menu.addEventListener('click', function () {
    
    menu.style.display = 'none';
    menuOpen.style.display = 'flex';

    dropdownMenu.style.display = 'flex';

});

menuOpen.addEventListener('click', function () {

    menuOpen.style.display = 'none';
    menu.style.display = 'flex';

    dropdownMenu.style.display = 'none';
});

// created by sebastian niño lopez from www.frontendpractice.com :)



