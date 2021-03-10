beforeEach(function() {
  browser.url("/Hidden-Elements/index.html")
});

describe("Check if the hidden elements exist", function() {
  it("Button display is set to non display but still exists in html DOM, should return true", function(done) {
    let elem = $('#not-displayed');
    let isEnabled = elem.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Button display is set to visibility hidden but still exists in html DOM, should return true", function(done) {
    let elem = $('#visibility-hidden');
    let isEnabled = elem.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Button display is set to zero opacity but still exists in html DOM, should return true", function(done) {
    let elem = $('#zero-opacity');
    let isEnabled = elem.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Header text is visible and exists in the html DOM, should return true", function(done) {
    let elem = $('h1');
    let isEnabled = elem.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("There is no such element with the id of #no-such-element in the html DOM, should return false", function(done) {
    let elem = $('#no-such-element');
    let isEnabled = elem.isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
