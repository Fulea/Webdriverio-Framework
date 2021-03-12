beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
});

describe("Check the Selected Dropdown Menus, Checkboxes & Radio Buttons", function() {
  it("Dropdown item Java is selected, should return true", function(done) {
    let elem = $("option[value='java']");
    console.log(elem.isSelected());
    expect(elem.isSelected()).to.equal(true);
  });

  it("Dropdown item Maven is not selected, should return false", function(done) {
    let elem = $("option[value='maven']");
    console.log(elem.isSelected());
    expect(elem.isSelected()).to.equal(false);
  });

  it("Option2 is not selected, should return false", function(done) {
    let elem = $("[value='option-2']");
    console.log(elem.isSelected());
    expect(elem.isSelected()).to.equal(false);
  });

  it("Option3 is selected, should return true", function(done) {
    let elem = $("[value='option-3']");
    console.log(elem.isSelected());
    expect(elem.isSelected()).to.equal(true);
  });

  it("Radio button pumpkin is selected, should return true", function(done) {
    let elem = $("[value='pumpkin']");
    console.log(elem.isSelected());
    expect(elem.isSelected()).to.equal(true);
  });
});
