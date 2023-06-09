import countComments from './countComments.js';
import countShows from './countItems.js';

export const showsContainer = document.querySelector('.shows-container');
const popupContainer = document.querySelector('.pop-up');
export const moviesNumber = document.querySelector('.movies-number');

let popup = false;

export const renderShow = (show) => {
  const showCard = document.createElement('div');
  showCard.setAttribute('class', 'show-card');
  showCard.id = `show-${show.id}`;
  showsContainer.insertAdjacentElement('beforeend', showCard);
  moviesNumber.innerHTML = countShows();
};

export const setShowCardInnerHtml = (showCard, show) => {
  showCard.innerHTML = `  <div class="show-image__container">
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
                </button>
 </div>
`;
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
      `<div class="pop-up__containt" id="popup-${show.id}">
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
              <div class="popup-comments-container" id="show-comments-${show.id}">
                  <h3 class="from-title comment-number">Comments: (0) </h3>
              </div>
              <form action="" class="comment-form">
                  <h3 class="from-title">
                      Add new comment:
                  </h3>
                  <input type="text" placeholder="Enter your name" class="form-input" id="form-name" required>
                  <textarea name="pop-comment" cols="20" rows="5" placeholder="Add your commment"
                      class="form-input" id="form-comment" required></textarea>
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

export const displayShowComments = (showsCommments, commentContainer) => {
  commentContainer.innerHTML = '<h3 class="from-title comment-number">Comments: (0) </h3>';
  const commentsNumber = commentContainer.querySelector('.comment-number');
  showsCommments.forEach((comment) => {
    const commentElement = document.createElement('article');
    commentElement.setAttribute('class', 'comment');
    commentsNumber.innerHTML = `Comments: ${
      countComments(commentContainer) + 1
    }`;
    commentElement.innerHTML = `
            <h4 class="comment-name">${comment.username} </h4>
            <small>${comment.creation_date}</small>
            <p>${comment.comment} </p>
        `;
    commentContainer.insertAdjacentElement('beforeend', commentElement);
  });
};
