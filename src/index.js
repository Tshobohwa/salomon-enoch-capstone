import "./index.css";

import { hiddePopupShow } from "./modules/DOM.js";
import likeShow from "./modules/newLike.js";
import { getShows, showPopupShow } from "./modules/shows.js";

getShows();

document.addEventListener("click", (e) => {
  // display popup
  if (
    e.target.classList.contains("comment-button") ||
    e.target.parentNode.classList.contains("comment-button")
  ) {
    const showCard = e.target.closest(".show-card");
    const showId = +showCard.id.split("-")[1];
    showPopupShow(showId);
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
