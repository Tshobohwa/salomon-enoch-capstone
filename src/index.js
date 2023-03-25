import './index.css';
import { addNewComment, getShowComments } from './modules/comments.js';
import countShows from './modules/countItems.js';

import { hiddePopupShow, moviesNumber } from './modules/DOM.js';
import likeShow from './modules/newLike.js';
import { getShows, showPopupShow } from './modules/shows.js';

getShows();

document.addEventListener('click', (e) => {
  // display popup
  if (
    e.target.classList.contains('comment-button')
    || e.target.parentNode.classList.contains('comment-button')
  ) {
    const showCard = e.target.closest('.show-card');
    const showId = +showCard.id.split('-')[1];
    showPopupShow(showId);
    getShowComments(showId);
  }

  // Hidde the popup
  if (
    e.target.classList.contains('pop-up')
    || e.target.classList.contains('close-popup')
  ) {
    hiddePopupShow();
  }

  // Like show
  if (
    e.target.classList.contains('like-button')
    || e.target.parentNode.classList.contains('like-button')
  ) {
    const showCard = e.target.closest('.show-card');
    const showId = +showCard.id.split('-')[1];
    likeShow(showId);
  }
  // Add new comment
  if (e.target.classList.contains('form-button')) {
    e.preventDefault();
    const nameInput = e.target.parentNode.querySelector('#form-name');
    const commentInput = e.target.parentNode.querySelector('#form-comment');
    const showId = +e.target.closest('.pop-up__containt').id.split('-')[1];
    const name = nameInput.value;
    const comment = commentInput.value;
    addNewComment(showId, name, comment);
    nameInput.value = '';
    commentInput.value = '';
  }
});

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    moviesNumber.innerHTML = countShows();
  }
});
