const burgerToggle = document.querySelector('.burger cursor-active');
const burgerMenu = document.querySelector('.burger__active');
const headerBackground = document.getElementById('site-header');
const Burger = document.querySelector('.burger');
const BurgerOpen = document.querySelector('.burger__active__container');
const MenuOpen = document.querySelector('.menu-open');
// const PortfolioVideo = document.getElementById('portfolio__video');
const videos = document.querySelectorAll('.portfolio__video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});

var myHeader = document.getElementById("site-header");
var prevScrollpos = window.pageYOffset;
var isMenuOpen = false;

window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  
  if (!isMenuOpen && prevScrollpos > currentScrollPos) {
    myHeader.style.top = "0";
    console.log("Header shown");
  } else {
    myHeader.style.top = "-100px";
    console.log("Header hidden");
  }
  

  
  prevScrollpos = currentScrollPos;
});



var burgerBtn = document.querySelector('.burger');
burgerBtn.addEventListener("click", function() {
  isMenuOpen = !isMenuOpen;
  document.body.classList.toggle('menu-open');
});



// Burger.addEventListener('click', () => {
//     headerBackground.classList.toggle('background');
//     Burger.classList.toggle('menu-open');
//     BurgerOpen.classList.toggle('menu-open');
//     // BurgerOpen.classList.toggle('burger__active__container');
//     BurgerOpen.style.display = 'block';
//     // BurgerOpen.style.justifyContent = 'space-between';
//     // BurgerOpen.style.flexDirection = 'column';
    
// });

Burger.addEventListener('click', () => {
  headerBackground.classList.toggle('background');
  Burger.classList.toggle('menu-open');
  BurgerOpen.classList.toggle('menu-open');
  // BurgerOpen.classList.toggle('burger__active__container');
  BurgerOpen.style.display = 'block';
  // BurgerOpen.style.justifyContent = 'space-between';
  // BurgerOpen.style.flexDirection = 'column';
  
  // Добавляем обнуление переменной isMenuOpen
  if (!Burger.classList.contains('menu-open')) {
      isMenuOpen = false;
  }
});






