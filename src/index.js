import './index.css';

import { hiddePopupShow } from './modules/DOM.js';
import { getShows, getOneShow } from './modules/shows.js';

getShows();

document.addEventListener('click', (e) => {
  // display popup
  if (
    e.target.classList.contains('comment-button')
    || e.target.parentNode.classList.contains('comment-button')
  ) {
    const showCard = e.target.closest('.show-card');
    const showId = +showCard.id.split('-')[1];
    getOneShow(showId);
  }

  // Hidde the popup
  if (
    e.target.classList.contains('pop-up')
    || e.target.classList.contains('close-popup')
  ) {
    hiddePopupShow();
  }
});