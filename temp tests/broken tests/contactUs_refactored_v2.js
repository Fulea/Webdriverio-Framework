const ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe("Test Contact Us form WebDriverUniversity", function() {
  it("Test1: Should be able to submit a successful submission via contact us form", function(done) {
    ContactUs_Page.submitAllInformation('John', 'Smith', 'john_smith@mail.com', 'How are you?');
  });

  it("Test2: Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    ContactUs_Page.setFirstName('Mike');
    ContactUs_Page.setLastName('Woods');
    ContactUs_Page.setEmailAddress('mike_woods@mail.com');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  it("Test3: Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    ContactUs_Page.setFirstName('Sarah');
    ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });

  it("Test4: Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    ContactUs_Page.setFirstName('Jim');
    ContactUs_Page.setLastName('Jones');
    ContactUs_Page.clickSubmitButton();
    ContactUs_Page.confirmUnsuccessfulSubmission();
  });
});
