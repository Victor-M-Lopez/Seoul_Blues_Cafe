let homeNav = document.querySelector('.menu--overlay');
let menuBtn = document.getElementById('nav_btn');
let exitBtn = document.getElementById('x-btn');

function openNav() {
    homeNav.style.opacity = "1";
    menuBtn.style.visibility = 'hidden';
    exitBtn.style.visibility = 'visible';
    homeNav.style.display = 'flex';
}

function closeNav() {
    exitBtn.style.visibility = 'hidden';
    homeNav.style.opacity = '0';
    menuBtn.style.visibility = 'visible';
    homeNav.style.display = 'none';
}