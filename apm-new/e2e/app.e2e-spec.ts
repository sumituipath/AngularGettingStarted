import { ApmNewPage } from './app.po';

describe('apm-new App', function() {
  let page: ApmNewPage;

  beforeEach(() => {
    page = new ApmNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pm works!');
  });
});
