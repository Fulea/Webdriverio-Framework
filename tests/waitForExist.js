beforeEach(function() {
  browser.url("/Accordion/index.html")
});

describe("Check if the right text appears on the Accordion page", function() {
  it("Check if the loading is complete, the text should be visible after a set duration of time", function(done) {
    this.timeout(20000);
    const elem = $('#hidden-text');
    console.log("Current Text = " + elem.getText());
    elem.waitForExist(1000);

    while(elem.getText() != 'LOADING COMPLETE.') {
      browser.pause(1000);
    }
    expect(elem.getText()).to.be.equal('LOADING COMPLETE.')
    console.log("Current Text = " + elem.getText());
  });
});
