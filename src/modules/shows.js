import { renderShow, showPopupShow } from './DOM.js';

export const showsAPIUrl = 'https://api.tvmaze.com/shows';

export const getShows = async () => {
  const response = await fetch(showsAPIUrl);
  if (!response.ok) return;
  const shows = await response.json();
  shows.forEach((show) => {
    renderShow(show);
  });
};

export const getOneShow = async (showId) => {
  const response = await fetch(`${showsAPIUrl}/${showId}`);
  if (!response.ok) return;
  const show = await response.json();
  showPopupShow(show);
  // eslint-disable-next-line consistent-return
  return show;
};

getShows();