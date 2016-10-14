import { FinanceInstitutePage } from './app.po';

describe('finance-institute App', function() {
  let page: FinanceInstitutePage;

  beforeEach(() => {
    page = new FinanceInstitutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
