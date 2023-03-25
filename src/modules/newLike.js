import { updateShow } from "./DOM.js";
import { getshowLikes } from "./likes.js";
import { showsAPIUrl } from "./shows.js";

const likeShow = async (showId) => {
  const response = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WzsfxsnhHGLs9rSilbgJ/likes/",
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
  if (!response.ok) throw new Error(`Endable to like: ${response.status}`);
  const allShowsLikes = await getshowLikes();
  const showResponse = await fetch(`${showsAPIUrl}/${showId}`);
  if (!showResponse.ok) return;
  const show = await showResponse.json();
  if (!show) {
    throw new Error("Enable to get show");
  }
  show.likes =
    allShowsLikes.find((show) => show.item_id === showId)?.likes || 0;
  updateShow(showId, show.likes);
};

export default likeShow;
