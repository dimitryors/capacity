import { GeekboardsPage } from './app.po';

describe('geekboards App', () => {
  let page: GeekboardsPage;

  beforeEach(() => {
    page = new GeekboardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
