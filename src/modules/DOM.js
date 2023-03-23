export const showsContainer = document.querySelector('.shows-container');

export const renderShow = (show) => {
  showsContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="show-card" id="${show.id}">
            <div class="show-image__container">
                <img src="${show.image}" alt="${show.name} cover image" class="show-image">
            </div>
            <p class="show-name">${show.name}
            </p>
            <div class="like-and-comment">
                <button class="like-button">
                    <i class="fa-regular fa-heart icon"></i>
                    <p class="likes">${show.likes}</p>
                </button>
                <button class="comment-button">
                    <i class="fa-regular fa-comment icon"></i>
                    <p class="comments">${show.comments}</p>
                </button>
            </div>
        </div>`,
  );
};
