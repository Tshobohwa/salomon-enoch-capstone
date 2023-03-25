import { JSDOM } from 'jsdom';
import countComments from '../modules/countComments.js';

describe('count comments displayed on the page', () => {
  beforeAll(() => {
    const dom = new JSDOM(`
      <div id="parent">
      </div>
    `);
    global.document = dom.window.document;
    global.window = dom.window;
  });

  test('counts comments on displayed when there is not comment', () => {
    const parent = document.querySelector('#parent');
    const comments = [
      {
        username: 'user 1',
        comment: 'comment 1',
      },
      {
        username: 'user 1',
        comment: 'comment 1',
      },
      {
        username: 'user 1',
        comment: 'comment 1',
      },
    ];
    comments.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.setAttribute('class', 'comment');
      commentElement.innerHTML = `
        <p> name: ${comment.username}</p>
        <p> comment: ${comment.comment}
        `;
      parent.insertAdjacentElement('beforeend', commentElement);
    });
    const count = countComments(parent);
    expect(count).toEqual(3);
  });

  // clean up the mocked DOM after all tests have run
  afterAll(() => {
    global.document = undefined;
    global.window = undefined;
  });
});
