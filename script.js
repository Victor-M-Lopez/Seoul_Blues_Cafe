window.onscroll = function() {navScroll()};

let navBar = document.getElementById('landing_page--nav');

function navScroll() {

  if (document.body.scrollTo > 150 || document.documentElement.scrollTop > 150) {
    navBar.className = 'blue-background';
  }
  
  else {
    navBar.classList.remove('blue-background');
  }
}