'use strict';
// объявление элементов страницы
const pageBody = document.querySelector(`.page-body`);
const pageMenuTitle = pageBody.querySelector(`.trip-controls h2`);

// функция отрисовки компонентов
const render = (path, markup, position = `beforeend`) => {
  path.insertAdjacentHTML(position, markup);
};

// функции создания компонентов
const createMenuComponent = () => {
  return(`<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn" href="#">Table</a>
  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
</nav>
  `)
};

// отрисовка компонентов
render(pageMenuTitle, createMenuComponent(), 'afterend');

