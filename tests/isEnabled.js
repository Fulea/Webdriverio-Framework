beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
});

describe("Check the Enabled Dropdown Menus, Checkboxes & Radio Buttons", function() {
  it("Dropdown item orange is disabled, should return false", function(done) {
    let elem = $("option[value='orange']");
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });

  it("Dropdown item grape is enabled, should return true", function(done) {
    let elem = $("option[value='grape']");
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Option2 is enabled, should return true", function(done) {
    let elem = $("input[value='option-2']");
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button pumpkin is enabled, should return true", function(done) {
    let elem = $("input[value='pumpkin']");
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button cabbage is disabled, should return false", function(done) {
    let elem = $("input[value='cabbage']");
    let isEnabled = elem.isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
