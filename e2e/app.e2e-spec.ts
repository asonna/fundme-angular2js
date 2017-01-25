import { FundmeAngular2jsPage } from './app.po';

describe('fundme-angular2js App', function() {
  let page: FundmeAngular2jsPage;

  beforeEach(() => {
    page = new FundmeAngular2jsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
