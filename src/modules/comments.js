const addNewComment = async (showId, name, comment) => {
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
  }
};

export default addNewComment;