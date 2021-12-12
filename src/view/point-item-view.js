import dayjs from 'dayjs';
import {getOffersPoint, getDateDuration} from '../utils';

export const createPointItemTemplate = (point) => {
  const {dateTimeStartEvent, pointType, destination, dateTimeEndEvent, price, offers, isFavorite} = point;
  const offersPoint = offers.size !== 0 ? getOffersPoint(offers) : '';

  return  `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${dayjs(dateTimeStartEvent).format('YYYY-MM-DD')}>${dayjs(dateTimeStartEvent).format('MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${pointType} ${destination}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime=${dayjs(dateTimeStartEvent).format('YYYY-MM-DDTHH:mm')}>${dayjs(dateTimeStartEvent).format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime=${dayjs(dateTimeEndEvent).format('YYYY-MM-DDTHH:mm')}>${dayjs(dateTimeEndEvent).format('HH:mm')}</time>
        </p>
        <p class="event__duration">${getDateDuration(dateTimeStartEvent, dateTimeEndEvent)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${offersPoint}
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
};
