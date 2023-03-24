import { displayPopup } from "./DOM.js";
import { getOneShowLikes } from "./likes.js";

export const showsAPIUrl = "https://api.tvmaze.com/shows";

export const getShows = async () => {
  const response = await fetch(showsAPIUrl);
  if (!response.ok) return;
  const shows = await response.json();
  shows.forEach((show) => {
    getOneShowLikes(show);
  });
};

export const showPopupShow = async (showId) => {
  const response = await fetch(`${showsAPIUrl}/${showId}`);
  if (!response.ok) return;
  const show = await response.json();
  displayPopup(show);
};
