import "./index.css";

import { displayPopup, hiddePopupShow } from "./modules/DOM.js";
import { likeShow } from "./modules/likes";
import { getShows } from "./modules/shows.js";

getShows();

document.addEventListener("click", (e) => {
  // display popup
  if (
    e.target.classList.contains("comment-button") ||
    e.target.parentNode.classList.contains("comment-button")
  ) {
    const showCard = e.target.closest(".show-card");
    const showId = +showCard.id.split("-")[1];
    displayPopup(showId);
  }

  // Hidde the popup
  if (
    e.target.classList.contains("pop-up") ||
    e.target.classList.contains("close-popup")
  ) {
    hiddePopupShow();
  }

  // Like show
  if (
    e.target.classList.contains("like-button") ||
    e.target.parentNode.classList.contains("like-button")
  ) {
    const showCard = e.target.closest(".show-card");
    const showId = +showCard.id.split("-")[1];
    likeShow(showId);
  }
});
