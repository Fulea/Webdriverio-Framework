describe("Test that the button is clickable once the Ajax loader completes loading", function() {
  it("Attempt to click the button after 7 seconds", function() {
    browser.url('/Ajax-Loader/index.html');
    this.timeout(20000);
    browser.pause(7000);
    const elem = $('#button1');
    elem.click();
    browser.pause(3000);
    browser.closeWindow();
  });
});
