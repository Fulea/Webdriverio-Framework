beforeEach(function() {
  browser.url("/Ajax-Loader/index.html")
});

describe("Check if the click me button is displayed on the Ajax-loader page", function() {
  it("Check if the click me button code is displayed in the DOM", function(done) {
    this.timeout(20000);
    const elem = $("//p[text()='CLICK ME!']");
    elem.waitForExist(8000);
  });

  it("Check if the click me button code is displayed once the Ajax loader fully loads", function(done) {
    this.timeout(20000);
    const elem = $("//p[text()='CLICK ME!']");
    elem.waitForDisplayed(8000);
  });
});
