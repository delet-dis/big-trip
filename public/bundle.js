!function(e){var n={};function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(s,i,function(n){return e[n]}.bind(null,i));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";const s=(e,n,t="beforeend")=>{e.insertAdjacentHTML(t,n)},i=document.querySelector(".page-body"),l=i.querySelector(".trip-controls h2"),a=i.querySelector(".trip-controls"),r=i.querySelector(".trip-events");s(l,'<nav class="trip-controls__trip-tabs  trip-tabs">\n  <a class="trip-tabs__btn" href="#">Table</a>\n  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>\n  </nav>',"afterend"),s(a,'<form class="trip-filters" action="#" method="get">\n              <div class="trip-filters__filter">\n                <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n              </div>\n\n              <div class="trip-filters__filter">\n                <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                <label class="trip-filters__filter-label" for="filter-future">Future</label>\n              </div>\n\n              <div class="trip-filters__filter">\n                <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                <label class="trip-filters__filter-label" for="filter-past">Past</label>\n              </div>\n\n              <button class="visually-hidden" type="submit">Accept filter</button>\n            </form>'),s(r,'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <span class="trip-sort__item  trip-sort__item--day">Day</span>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">\n                Time\n                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">\n                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>\n                </svg>\n              </label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">\n                Price\n                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">\n                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>\n                </svg>\n              </label>\n            </div>\n\n            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>\n          </form>\n          '),s(r,'<form class="trip-events__item  event  event--edit" action="#" method="post">\n            <header class="event__header">\n              <div class="event__type-wrapper">\n                <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                  <span class="visually-hidden">Choose event type</span>\n                  <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                </label>\n                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                <div class="event__type-list">\n                  <fieldset class="event__type-group">\n                    <legend class="visually-hidden">Transfer</legend>\n\n                    <div class="event__type-item">\n                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">\n                      <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                    </div>\n                  </fieldset>\n\n                  <fieldset class="event__type-group">\n                    <legend class="visually-hidden">Activity</legend>\n\n                    <div class="event__type-item">\n                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                    </div>\n\n                    <div class="event__type-item">\n                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                    </div>\n                  </fieldset>\n                </div>\n              </div>\n\n              <div class="event__field-group  event__field-group--destination">\n                <label class="event__label  event__type-output" for="event-destination-1">\n                  Flight to\n                </label>\n                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">\n                <datalist id="destination-list-1">\n                  <option value="Amsterdam"></option>\n                  <option value="Geneva"></option>\n                  <option value="Chamonix"></option>\n                  <option value="Saint Petersburg"></option>\n                </datalist>\n              </div>\n\n              <div class="event__field-group  event__field-group--time">\n                <label class="visually-hidden" for="event-start-time-1">\n                  From\n                </label>\n                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">\n                &mdash;\n                <label class="visually-hidden" for="event-end-time-1">\n                  To\n                </label>\n                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">\n              </div>\n\n              <div class="event__field-group  event__field-group--price">\n                <label class="event__label" for="event-price-1">\n                  <span class="visually-hidden">Price</span>\n                  &euro;\n                </label>\n                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n              </div>\n\n              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n              <button class="event__reset-btn" type="reset">Cancel</button>\n            </header>\n            <section class="event__details">\n              <section class="event__section  event__section--offers">\n                <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                <div class="event__available-offers">\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                    <label class="event__offer-label" for="event-offer-luggage-1">\n                      <span class="event__offer-title">Add luggage</span>\n                      &plus;\n                      &euro;&nbsp;<span class="event__offer-price">30</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                    <label class="event__offer-label" for="event-offer-comfort-1">\n                      <span class="event__offer-title">Switch to comfort class</span>\n                      &plus;\n                      &euro;&nbsp;<span class="event__offer-price">100</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                    <label class="event__offer-label" for="event-offer-meal-1">\n                      <span class="event__offer-title">Add meal</span>\n                      &plus;\n                      &euro;&nbsp;<span class="event__offer-price">15</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                    <label class="event__offer-label" for="event-offer-seats-1">\n                      <span class="event__offer-title">Choose seats</span>\n                      &plus;\n                      &euro;&nbsp;<span class="event__offer-price">5</span>\n                    </label>\n                  </div>\n\n                  <div class="event__offer-selector">\n                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                    <label class="event__offer-label" for="event-offer-train-1">\n                      <span class="event__offer-title">Travel by train</span>\n                      &plus;\n                      &euro;&nbsp;<span class="event__offer-price">40</span>\n                    </label>\n                  </div>\n                </div>\n              </section>\n            </section>\n          </form>');const p=document.querySelector(".trip-events__trip-sort");for(let e=0;e<3;e++)s(p,'<li class="trip-days__item  day">\n  <div class="day__info">\n    <span class="day__counter">1</span>\n    <time class="day__date" datetime="2019-03-18">MAR 18</time>\n  </div>\n\n  <ul class="trip-events__list">\n    <li class="trip-events__item">\n      <div class="event">\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Taxi to Amsterdam</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">20</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          <li class="event__offer">\n            <span class="event__offer-title">Order Uber</span>\n            &plus;\n            &euro;&nbsp;<span class="event__offer-price">20</span>\n           </li>\n        </ul>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n\n    <li class="trip-events__item">\n      <div class="event">\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Flight to Chamonix</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>\n          </p>\n          <p class="event__duration">1H 10M</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">160</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          <li class="event__offer">\n            <span class="event__offer-title">Add luggage</span>\n            &plus;\n            &euro;&nbsp;<span class="event__offer-price">50</span>\n           </li>\n           <li class="event__offer">\n             <span class="event__offer-title">Switch to comfort</span>\n             &plus;\n             &euro;&nbsp;<span class="event__offer-price">80</span>\n            </li>\n        </ul>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n\n    <li class="trip-events__item">\n      <div class="event">\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Drive to Chamonix</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>\n          </p>\n          <p class="event__duration">1H 35M</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">160</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          <li class="event__offer">\n            <span class="event__offer-title">Rent a car</span>\n            &plus;\n            &euro;&nbsp;<span class="event__offer-price">200</span>\n           </li>\n        </ul>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n\n    <li class="trip-events__item">\n      <div class="event">\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Check-in in Chamonix</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T12:25">16:20</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T13:35">17:00</time>\n          </p>\n          <p class="event__duration">40M</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">600</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          <li class="event__offer">\n            <span class="event__offer-title">Add breakfast</span>\n            &plus;\n            &euro;&nbsp;<span class="event__offer-price">50</span>\n           </li>\n        </ul>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  </ul>\n</li>')}]);
//# sourceMappingURL=bundle.js.map