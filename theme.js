const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Проверяем значение в localStorage при загрузке страницы
if (localStorage.getItem('theme') === 'light') {
  html.classList.add('light-theme');
}

// Обрабатываем клик на кнопке
themeToggle.addEventListener('click', () => {
  if (html.classList.contains('light-theme')) {
    // Если текущая тема - светлая, переключаем на темную
    html.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    // Если текущая тема - темная, переключаем на светлую
    html.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});
const body = document.querySelector('body');
  
function toggleTheme() {
  html.classList.toggle('light-theme');
  html.classList.toggle('dark-theme');
  
  if (html.classList.contains('light-theme')) {
    swiper.slideTo(0);
  } else {
    swiper.slideTo(1);
  }
}

toggleTheme();