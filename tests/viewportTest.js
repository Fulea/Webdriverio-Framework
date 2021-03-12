beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
});

describe("Check if the specific elements are visible within the viewport", function() {
  it("Should resize the current viewport", function(done) {
    browser.setWindowSize(1200, 800);
    browser.pause(2000);

    const windowSize = browser.getWindowSize();
    console.log(windowSize);
  });

  it("Should detect if '#not-displayed' is visible", function(done) {
    const elem = $('#not-displayed');
    console.log(elem.isDisplayedInViewport());
    expect(elem.isDisplayedInViewport()).to.equal(false);
  });

  it("Should detect if '#visibility-hidden' is visible", function(done) {
    const elem = $('#visibility-hidden');
    console.log(elem.isDisplayedInViewport());
    expect(elem.isDisplayedInViewport()).to.equal(false);
  });

  it("Should detect if '#zero-opacity' is visible", function(done) {
    const elem = $('#zero-opacity');
    console.log(elem.isDisplayedInViewport());
    expect(elem.isDisplayedInViewport()).to.equal(false);
  });

  it("Should detect if 'h1' is visible", function(done) {
    const elem = $('h1');
    console.log(elem.isDisplayedInViewport());
    expect(elem.isDisplayedInViewport()).to.equal(true);
  });
});
