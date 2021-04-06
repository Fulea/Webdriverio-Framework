const request = require('sync-request');

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe("Test Contact Us form WebDriverUniversity", function() {
  const res = request('GET', 'http://www.json-generator.com/api/json/get/cgzurXAgpu?indent=2');
  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  // Centralizing selectors
  const firstNameSelector = "[name='first_name']";
  const lastNameSelector = "[name='last_name']";
  const emailAddressSelector = "[name='email']";
  const messageSelector = "[name='message']";
  const successfulSubmissionSelector = "#contact_reply h1";
  const unsuccessfulSubmissionSelector = 'body';
  const submitButtonSelector = "[type='submit']";

  // Improving existing commands
  function setFirstName(firstName) {
    return $(firstNameSelector).setValue(firstName);
  }

  function setLastName(lastName) {
    return $(lastNameSelector).setValue(lastName);
  }

  function setEmailAddress(email) {
    return $(emailAddressSelector).setValue(email);
  }

  function setMessage(about) {
    return $(messageSelector).setValue(about);
  }

  function clickSubmitButton() {
    return browser.elementClick(submitButtonSelector);
  }

  function confirmSuccessfulSubmission() {
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
    browser.pause(1000);
    const successfulConfirmation = $('#contact_reply h1');
    const getHeaderText = successfulConfirmation.isExisting();
    expect(getHeaderText, "Successful submission message doesn't exist").to.equal(true);
  }

  function confirmUnsuccessfulSubmission() {
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact_us.php');
    browser.pause(1000);
    const errorText = $('body');
    const getBodyText = errorText.getText();
    expect(getBodyText).to.include('Error: all fields are required');
  }


  contactUsDetails.forEach(function (contactDetail) {
  it("Should be able to submit a successful submission via contact us form", function(done) {
    setFirstName(contactDetail.firstName);
    setLastName(contactDetail.lastName);
    setEmailAddress(contactDetail.email);
    setMessage(contactDetail.about);
    clickSubmitButton();
    confirmSuccessfulSubmission();
  });
});

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    setFirstName('Mike');
    setLastName('Woods');
    setEmailAddress('mike_woods@mail.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    setFirstName('Sarah');
    setEmailAddress('sarah_woods@mail.com');
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    setFirstName('Jim');
    setLastName('Jones');
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });
});
