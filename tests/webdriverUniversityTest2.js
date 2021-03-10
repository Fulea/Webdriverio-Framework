describe("Verify that the webdriveruniversity links on homepage work correctly", function() {
  it("Check that the login button opens the login portal page", function() {
    browser.url('/');
    browser.pause(1000);
    const title = browser.getTitle();
    title.should.equal('WebDriverUniversity.com');
    console.log('Title is: ' + title);
    browser.pause(1000);

    browser.elementClick('#login-portal');
    browser.newWindow('http://www.webdriveruniversity.com/Login-Portal/index.html');
    browser.pause(1000);

    const title2 = browser.getTitle();
    title2.should.equal('WebDriver | Login Portal');
    console.log('Title is: ' + title2);
    browser.pause(1000);

    const url = browser.getUrl();
    url.should.include('Login-Portal', 'URL Mismatch');
    browser.closeWindow();
  });
});
