import { JSDOM } from 'jsdom';
import countShows from '../modules/countItems.js';

describe('countShows', () => {
  // mock the DOM using jsdom
  beforeAll(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <div class="show-card"></div>
          <div class="show-card"></div>
          <div class="show-card"></div>
        </body>
      </html>
    `);
    global.document = dom.window.document;
    global.window = dom.window;
  });

  test('counts the number of show-card elements', () => {
    const count = countShows();
    expect(count).toEqual(3);
  });

  test('counts the number of show-card elements after adding one', () => {
    const newShowCard = document.createElement('div');
    newShowCard.classList.add('show-card');
    document.body.appendChild(newShowCard);
    const count = countShows();
    expect(count).toEqual(4);
  });

  test('counts the number of show-card elements after removing one', () => {
    const showCards = document.querySelectorAll('.show-card');
    const lastShowCard = showCards[showCards.length - 1];
    document.body.removeChild(lastShowCard);
    const count = countShows();
    expect(count).toEqual(3);
  });

  // clean up the mocked DOM after all tests have run
  afterAll(() => {
    global.document = undefined;
    global.window = undefined;
  });
});
