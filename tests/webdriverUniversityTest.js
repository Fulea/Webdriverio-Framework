describe("Verify wether webdriveruniversity links on homepage work correctly", function() {
  it("Check that the contact us button opens the contact us page", function() {
    browser.url('/');
    browser.maximizeWindow();
    browser.pause(3000);
    browser.elementClick('#contact-us')
    const title = browser.getTitle();
    expect(title).to.equal('WebDriverUniversity.com');
    console.log('Title is: ' + title);
    browser.pause(3000);
  });

  it("Check that the login button opens the login portal page", function() {
    browser.url('/');
    browser.maximizeWindow();
    browser.pause(3000);
    browser.elementClick('#login-portal')
    const title = browser.getTitle();
    title.should.equal('WebDriverUniversity.com');
    console.log('Title is: ' + title);
    browser.pause(3000);
  });
});
