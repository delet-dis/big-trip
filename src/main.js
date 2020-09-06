//импорты из компонентов
import './css/style.css';
import {
  createEventEditComponent
} from './components/editing.js';
import {
  createEventComponent
} from './components/event.js';
import {
  createFiltersComponent
} from './components/filters.js';
import {
  createMenuComponent
} from './components/menu.js';
import {
  createSortingComponent
} from './components/sorting.js';
import{
  // eslint-disable-next-line no-unused-vars
  img
} from './img/logo.png';
// функция отрисовки компонентов
const render = (path, markup, position = `beforeend`) => {
  path.insertAdjacentHTML(position, markup);
};

const NUMBER_OF_CARDS = 3;
// объявление элементов страницы
const pageBody = document.querySelector(`.page-body`);
const pageMenuTitle = pageBody.querySelector(`.trip-controls h2`);
const tripControls = pageBody.querySelector('.trip-controls');
const tripEvents = pageBody.querySelector('.trip-events');

// отрисовка компонентов
render(pageMenuTitle, createMenuComponent(), 'afterend');
render(tripControls, createFiltersComponent());
render(tripEvents, createSortingComponent());
render(tripEvents, createEventEditComponent());

const eventsSorter = document.querySelector('.trip-events__trip-sort');

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  render(eventsSorter, createEventComponent());
}
