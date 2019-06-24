import { BookReviewsPage } from './app.po';

describe('book-reviews App', () => {
  let page: BookReviewsPage;

  beforeEach(() => {
    page = new BookReviewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
