const request = require('sync-request');

beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe("Test Contact Us form WebDriverUniversity", function() {
  const res = request('GET', 'http://www.json-generator.com/api/json/get/cgzurXAgpu?indent=2');

  const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

  beforeEach(function() {
    console.log('Running function...');
  });

  contactUsDetails.forEach(function (contactDetail) {
  it.only("Should be able to submit a successful submission via contact us form", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue(contactDetail.firstName);
    const lastName = $("[name='last_name']");
    lastName.setValue(contactDetail.lastName);
    const email = $("[name='email']");
    email.setValue(contactDetail.email);
    const message = $("[name='message']");
    message.setValue(contactDetail.about);
    browser.elementClick("[type='submit']");
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
    browser.pause(1000);

    const successfulConfirmation = $('#contact_reply h1');
    const isExisting = successfulConfirmation.isExisting();
    console.log(isExisting);
    expect(isExisting, "Successful submission message doesn't exist").to.equal(true);

    const successfulSubmission = $('#contact_reply h1');
    const getText = successfulSubmission.getText();
    console.log(getText);
    expect(getText).to.equal('Thank You for your Message!');
  })
});

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue('Mike');
    const lastName = $("[name='last_name']");
    lastName.setValue('Woods');
    const email = $("[name='email']");
    email.setValue('mike_woods@mail.com');
    browser.elementClick("[type='submit']");
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact_us.php');
    browser.pause(1000);

    const successfulConfirmation = $('#contact_reply h1');
    const isExisting = successfulConfirmation.isExisting();
    console.log(isExisting);
    expect(isExisting, "Successful submission message doesn't exist").to.equal(false);
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue('Sarah');
    const email = $("[name='email']");
    email.setValue('sarah_woods@mail.com');
    browser.elementClick("[type='submit']");
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact_us.php');
    browser.pause(1000);

    const successfulConfirmation = $('#contact_reply h1');
    const isExisting = successfulConfirmation.isExisting();
    console.log(isExisting);
    expect(isExisting, "Successful submission message doesn't exist").to.equal(false);
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']")
    firstName.setValue('Jim');
    const lastName = $("[name='last_name']");
    lastName.setValue('Jones');
    browser.elementClick("[type='submit']");
    browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact_us.php');
    browser.pause(1000);

    const errorText = $('body');
    const getText = errorText.getText();
    console.log(getText);
    expect(getText).to.include('Error: all fields are required');
  });

  afterEach(function(done) {
    console.log('Function finished!');
  });
});

after(function(done) {
  console.log('All blocks finished!');
});
