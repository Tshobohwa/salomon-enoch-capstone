import { displayShowComments } from './DOM.js';

export const getShowComments = async (showId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WzsfxsnhHGLs9rSilbgJ/comments?item_id=${showId}`,
  );
  if (!response.ok) {
    throw new Error(`Enable to get comments: Status (${response.status})`);
  }
  const showComments = await response.json();
  const commentsContainer = document.querySelector(`#show-comments-${showId}`);
  displayShowComments(showComments, commentsContainer);
};

export const addNewComment = async (showId, name, comment) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WzsfxsnhHGLs9rSilbgJ/comments/',

    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: showId,
        username: name,
        comment,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(
      `Enable to send the comment, Status: (${response.status}) `,
    );
  } else {
    getShowComments(showId);
  }
};