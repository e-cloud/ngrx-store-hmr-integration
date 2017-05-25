import { NgrxStoreHmrItergrationPage } from './app.po';

describe('ngrx-store-hmr-itergration App', () => {
  let page: NgrxStoreHmrItergrationPage;

  beforeEach(() => {
    page = new NgrxStoreHmrItergrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
