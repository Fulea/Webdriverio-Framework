describe("Verify that the webdriveruniversity links on homepage work correctly", function() {
  it("Check that the contact us button opens the contact us page", function() {
    browser.url('/');
    browser.pause(1000);
    const title = browser.getTitle();
    expect(title).to.equal('WebDriverUniversity.com');
    console.log('Title is: ' + title);
    browser.pause(1000);

    browser.elementClick('#contact-us');
    browser.newWindow('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    browser.pause(1000);

    const title2 = browser.getTitle();
    title2.should.equal('WebDriver | Contact Us');
    console.log('Title is: ' + title2);
    browser.pause(1000);

    const url = browser.getUrl();
    url.should.include('Contact-Us', 'URL Mismatch');
    browser.closeWindow();
  });
});
