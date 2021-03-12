describe("Test Checkboxes on Page", function() {
  it("Should be able to focus on the checkboxes elements", function(done) {
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    const checkboxOne = $("input[value='option-1']");
    checkboxOne.click();
    console.log('The first checkbox has a value of ' + checkboxOne.isFocused());
    expect(checkboxOne.isFocused(), 'The first checkbox should have focus!').to.be.true;

    const checkboxTwo = $("input[value='option-3']");
    console.log('The third checkbox has a value of ' + checkboxTwo.isFocused());
    expect(checkboxTwo.isFocused(), 'The first checkbox should have focus!').to.be.false;
  });
});
