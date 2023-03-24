import { renderShow, updateShow } from "./DOM.js";
import { getOneShow } from "./shows.js";

export const getshowLikes = async () => {
  const response = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WzsfxsnhHGLs9rSilbgJ/likes/"
  );
  const data = await response.json();
  return data;
};

getshowLikes();

export const getOneShowLikes = async (show) => {
  const showId = show.id;
  const allShowsLikes = await getshowLikes();
  show.likes =
    allShowsLikes.find((show) => show.item_id === showId)?.likes || 0;
  renderShow(show);
};

export const likeShow = async (showId) => {
  const response = fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WzsfxsnhHGLs9rSilbgJ/likes/`,
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
  const show = await getOneShow(showId);
  const allShowsLikes = await getshowLikes();
  show.likes =
    allShowsLikes.find((show) => show.item_id === showId)?.likes || 0;
  updateShow(showId, show.likes);
};
