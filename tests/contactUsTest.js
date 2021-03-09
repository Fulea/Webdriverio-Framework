beforeEach(function() {
  browser.url('/Contact-Us/contactus.html');
});

describe("Test Contact Us form WebDriverUniversity", function() {
  beforeEach(function() {
    console.log('Running function...');
  });

  it("Should be able to submit a successful submission via contact us form", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue('Joe');
    const lastName = $("[name='last_name']");
    lastName.setValue('Black');
    const email = $("[name='email']");
    email.setValue('joe_black@mail.com');
    const message = $("[name='message']");
    message.setValue('How much does product x cost?');
    browser.elementClick("[type='submit']");
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue('Mike');
    const lastName = $("[name='last_name']");
    lastName.setValue('Woods');
    const email = $("[name='email']");
    email.setValue('mike_woods@mail.com');
    browser.elementClick("[type='submit']");
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']");
    firstName.setValue('Sarah');
    const email = $("[name='email']");
    email.setValue('sarah_woods@mail.com');
    browser.elementClick("[type='submit']");
  });

  it("Should not be able to submit a successful submission via contact us form  as all fields are required", function(done) {
    const firstName = $("[name='first_name']")
    firstName.setValue('Jim');
    const lastName = $("[name='last_name']");
    lastName.setValue('Jones');
    browser.elementClick("[type='submit']");
  });

  afterEach(function(done) {
    console.log('Function finished!');
  });
});

after(function(done) {
  console.log('All blocks finished!');
});
