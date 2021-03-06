import AbstractView from './abstract-view';
import {MenuItem} from '../const';

const createSiteMenuNavigationTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn" href="#" name="${MenuItem.TABLE}">${MenuItem.TABLE}</a>
  <a class="trip-tabs__btn" href="#" name="${MenuItem.STATS}">${MenuItem.STATS}</a>
</nav>`;

export default class TripTabsView extends AbstractView {
  get template() {
    return createSiteMenuNavigationTemplate();
  }

  setMenuClickHandler = (callback) => {
    this._callback.menuClick = callback;
    this.element.addEventListener('click', this.#menuClickHandler);
  }

  #menuClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.menuClick(evt.target.name);
  }
}
