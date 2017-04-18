import { TagSkillsPage } from './app.po';

describe('tag-skills App', function() {
  let page: TagSkillsPage;

  beforeEach(() => {
    page = new TagSkillsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
