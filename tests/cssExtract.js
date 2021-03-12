describe("Test that webdriveruniversity homepage", function() {
  it("Output the height of the homepage carousel", function() {
    browser.url('./');
    browser.pause(2000);
    const elem = $('#udemy-promo-thumbnail');
    const divCarouselHeight = elem.getCSSProperty('height');
    console.log(divCarouselHeight);
  });
});
