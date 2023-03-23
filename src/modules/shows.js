import { renderShow } from './DOM.js';

export const shows = [];

export const getShows = async () => {
  const response = await fetch(
    `https://api.tvmaze.com/shows/${shows.length + 51}`,
  );
  if (!response.ok) return;

  const show = await response.json();
  shows.push({
    id: show.id,
    name: show.name,
    image: show.image.medium,
    likes: 0,
    comments: 0,
  });
  renderShow({
    id: show.id,
    name: show.name,
    image: show.image.medium,
    likes: 0,
    comments: 0,
  });

  if (shows.length < 20) getShows();
};

getShows();
