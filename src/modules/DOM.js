const showsContainer = document.querySelector('.shows-container');
const popupContainer = document.querySelector('.pop-up');

let popup = false;

export const renderShow = (show) => {
  showsContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="show-card" id="show-${show.id}">
            <div class="show-image__container">
                <img src="${show.image.medium}" alt="${show.name} cover image" class="show-image">
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

export const hiddePopupShow = () => {
  popupContainer.innerHTML = '';
  popupContainer.classList.add('hidden');
  popup = false;
};

export const displayPopup = (show) => {
  if (!popup) {
    popupContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="pop-up__containt">
          <div class="pop-up__header">
              <button class="close-popup">&times;</button>
          </div>
          <div class="show-infos">
              <div class="show-image__container">
                  <img src="${show.image.medium}" alt="show-image"
                      class="show-image">
              </div>
              <div class="show-description">
                  <h2 class="show-name">${show.name}</h2>
                  <p>Language: ${show.language}</p>
                  <p></p>
                  <p>Status: ${show.status}</p>
              </div>
          </div>
          <p class="show-summary">${show.summary}</p>
          <footer class="pop-up__footer">
              <div class="popup-comments-container">
                  <h3 class="from-title">Comments:</h3>
              </div>
              <form action="" class="comment-form">
                  <h3 class="from-title">
                      Add new comment:
                  </h3>
                  <input type="text" placeholder="Enter your name" class="form-input" id="form-name">
                  <textarea name="pop-comment" id="" cols="20" rows="5" placeholder="Add your commment"
                      class="form-input" id="form-comment"></textarea>
                  <button class="form-button" type="submit">Comment</button>
              </form>
          </footer>
      </div>`,
    );
    popup = true;
    popupContainer.classList.remove('hidden');
  }
};

export const updateShow = (showId, showLikes) => {
  const showCard = document.querySelector(`#show-${showId}`);
  showCard.querySelector('.likes').innerHTML = showLikes;
};
