beforeEach(function() {
  browser.url("/Hidden-Elements/index.html")
});

describe("Check if the hidden elements are visible", function() {
  it("Button display is set to non display, should return false", function(done) {
    const elem = $('#not-displayed');
    let clickable = elem.isClickable();
    console.log(clickable);
    expect(clickable).to.equal(false);
  });

  it("Button display is set to visibility hidden, should return false", function(done) {
    const elem = $('#visibility-hidden');
    let clickable = elem.isClickable();
    console.log(clickable);
    expect(clickable).to.equal(false);
  });

  it("Button display is set to zero opacity, should return false", function(done) {
    const elem = $('#zero-opacity');
    let clickable = elem.isClickable();
    console.log(clickable);
    expect(clickable).to.equal(false);
  });

  it("Header text is visible, should return true", function(done) {
    const elem = $('h1');
    let clickable = elem.isClickable();
    console.log(clickable);
    expect(clickable).to.equal(true);
  });
});
