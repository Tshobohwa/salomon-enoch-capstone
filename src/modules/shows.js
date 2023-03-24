import { renderShow, showPopupShow } from "./DOM.js";

const showsAPIUrl = "https://api.tvmaze.com/shows";

const involvementAPIUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";

const getShowLikes = async () => {
  const response = await fetch(
    `${involvementAPIUrl}apps/WzsfxsnhHGLs9rSilbgJ/likes/`
  );
  const responseData = await response.text();
  const data = responseData && JSON.parse(responseData);
  console.log(data);
  return data;
};

const likeShow = async (showId) => {
  const response = fetch(
    `${involvementAPIUrl}apps/WzsfxsnhHGLs9rSilbgJ/likes/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: showId,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

likeShow(12);

getShowLikes();
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
};

getShows();
