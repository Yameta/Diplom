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

// // Не даем скрываться header при клике на burger
// burger.addEventListener('click', () => {
//   burger.classList.add('cursor-active');
// });

// // Скрываем cursor-active при клике где-либо на странице
// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.burger__container')) {
//     burger.classList.remove('cursor-active');
//   }
// });

Burger.addEventListener('click', () => {
  headerBackground.classList.toggle('background');
  Burger.classList.toggle('menu-open');
  BurgerOpen.classList.toggle('menu-open');
  // BurgerOpen.classList.toggle('burger__active__container');
  BurgerOpen.style.display = 'block';
  // BurgerOpen.style.justifyContent = 'space-between';
  // BurgerOpen.style.flexDirection = 'column';
});

// SVG элемент показ
// const arrow = document.querySelector('.specialization__arrow');
// arrow.style.display = 'none';

// const item = document.querySelector('.specialization__item');
// item.addEventListener('mouseover', () => {
//   arrow.style.display = 'block';
// });

// item.addEventListener('mouseout', () => {
//   arrow.style.display = 'none';
// });

function openModal() {
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

// Закрывать модальное окно при нажатии на Esc

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Закрывать модальное окно при нажатии на overlay

document.getElementById("overlay").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});

const content = document.querySelector('.conclusion__text');

function setScrollColor() {
  const scrollTop = content.scrollTop; // Позиция скролла сверху
}

content.addEventListener('scroll', setScrollColor); // Добавляем обработчик события при прокрутке


// Вернуться на начало страницы
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


// Валидация формы заявки
const form = document.querySelector('.modal-content');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  
  const nameRegex = new RegExp('[а-яА-ЯёЁa-zA-Z\s]+');
  const phoneRegex = new RegExp('+{7}(000)000-00-00');
  
  if (nameInput.value.match(nameRegex) && phoneInput.value.match(phoneRegex)) {
    form.submit();
  } else {
    if (!nameInput.value.match(nameRegex)) {
      nameInput.setCustomValidity('Введите имя на русском или английском языке');
      nameInput.nextElementSibling.textContent = 'Введите имя на русском или английском языке';
    } else {
      nameInput.setCustomValidity('');
      nameInput.nextElementSibling.textContent = '';
    }
    if (!phoneInput.value.match(phoneRegex)) {
      phoneInput.setCustomValidity('Введите номер телефона в формате +7(999)999-99-99');
      phoneInput.nextElementSibling.textContent = 'Введите номер телефона в формате +7(999)999-99-99';
    } else {
      phoneInput.setCustomValidity('');
      phoneInput.nextElementSibling.textContent = '';
    }
  }
});


// Маска телефона
var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

// Открытие кнопки соц.сетей
const mainBtn = document.querySelector('.main-btn');
const subBtns = document.querySelector('.sub-btns');

mainBtn.addEventListener('click', () => {
 mainBtn.classList.toggle('active');
 subBtns.classList.toggle('hide');
});

subBtns.addEventListener('click', (e) => {
 if (e.target.classList.contains('sub-btn')) {
  mainBtn.classList.remove('active');
  subBtns.classList.add('hide');
 }
});

// Перечключение стилей у кнопки с соц.сетям
const mainButton = document.getElementById('main-button');

mainButton.addEventListener('click', function() {
  if (mainButton.classList.contains('close')) {
    mainButton.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#E12A2E"/><path d="M26.6667 28H37.3333M26.6667 33.3333H34.6667M40 21.3333C41.0609 21.3333 42.0783 21.7547 42.8284 22.5049C43.5786 23.255 44 24.2724 44 25.3333V36C44 37.0608 43.5786 38.0783 42.8284 38.8284C42.0783 39.5786 41.0609 40 40 40H33.3333L26.6667 44V40H24C22.9391 40 21.9217 39.5786 21.1716 38.8284C20.4214 38.0783 20 37.0608 20 36V25.3333C20 24.2724 20.4214 23.255 21.1716 22.5049C21.9217 21.7547 22.9391 21.3333 24 21.3333H40Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    mainButton.classList.remove('close');
  } else {
    mainButton.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="32" fill="#E12A2E"/><path d="M33.9465 32L41.3332 39.3867V41.3334H39.3865L31.9998 33.9467L24.6132 41.3334H22.6665V39.3867L30.0532 32L22.6665 24.6134V22.6667H24.6132L31.9998 30.0534L39.3865 22.6667H41.3332V24.6134L33.9465 32Z" fill="white"/></svg>';
    mainButton.classList.add('close');
  }
});

//Breadcrubms
// var path = window.location.pathname;
// var page = path.split("/").pop();
// var crumbs = path.split("/").slice(1, -1);
// var breadcrumb = "<a href='/'>Home</a>";
// var url = "";

// for (var i = 0; i < crumbs.length; i++) {
//   url += "/" + crumbs[i];
//   breadcrumb += " > <a href='" + url + "'>" + crumbs[i] + "</a>";
// }

// breadcrumb += " > " + page;

// document.getElementById("breadcrumbs").innerHTML = breadcrumb;
