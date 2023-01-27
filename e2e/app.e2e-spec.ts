import { AlbazPage } from './app.po';

describe('albaz App', () => {
  let page: AlbazPage;

  beforeEach(() => {
    page = new AlbazPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
