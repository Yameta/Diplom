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
const header = document.getElementById('site-header');
const burger = document.querySelector('.burger__container');

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  // Получаем текущую позицию скролла
  const currentScrollPosition = window.pageYOffset;

  // Скрываем или показываем header в зависимости от направления скролла
  if (currentScrollPosition > lastScrollPosition && !BurgerOpen.classList.contains('menu-open')) {
    header.classList.remove('show');
    header.classList.add('hide');
  } else {
    header.classList.add('show');
    header.classList.remove('hide');
  }

  // Обновляем значение lastScrollPosition
  lastScrollPosition = currentScrollPosition;
});

// Делаем header видимым при первоначальной загрузке страницы
header.classList.add('show');

// Не даем скрываться header при клике на burger
burger.addEventListener('click', () => {
  burger.classList.add('cursor-active');
});

// Скрываем cursor-active при клике где-либо на странице
document.addEventListener('click', (event) => {
  if (!event.target.closest('.burger__container')) {
    burger.classList.remove('cursor-active');
  }
});

Burger.addEventListener('click', () => {
  headerBackground.classList.toggle('background');
  Burger.classList.toggle('menu-open');
  BurgerOpen.classList.toggle('menu-open');
  // BurgerOpen.classList.toggle('burger__active__container');
  BurgerOpen.style.display = 'block';
  // BurgerOpen.style.justifyContent = 'space-between';
  // BurgerOpen.style.flexDirection = 'column';
});

// const textBlock = document.querySelector('.conclusion__text');
// const handle = document.querySelector('.conclusion__text::-webkit-scrollbar-thumb');

// textBlock.addEventListener('scroll', () => {
//   const scrollPercentage = (textBlock.scrollTop + textBlock.clientHeight) / textBlock.scrollHeight * 100;
  
//   /* Если процент прокрутки меньше 50%, устанавливаем красный цвет для handle */
//   if (scrollPercentage < 50) {
//     handle.style.backgroundColor = '#FF0000';
//   } else {
//     handle.style.backgroundColor = '#0000FF';
//   }
// });
const content = document.querySelector('.conclusion__text');

function setScrollColor() {
  const scrollTop = content.scrollTop; // Позиция скролла сверху
}

content.addEventListener('scroll', setScrollColor); // Добавляем обработчик события при прокрутке



