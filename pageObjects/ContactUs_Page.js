class ContactUs_Page {
  get firstName() { return $("[name='first_name']") }
  get lasttName() { return $("[name='last_name']") }
  get emailAddress() { return $("[name='email']") }
  get message() { return $("[name='message']") }
  get submitButton() { return $("[type='submit']") }
  get successfulSubmissionHeader() { return $("#contact_reply h1") }
  get unsuccessfulSubmissionHeader() { return $('body') }

setFirstName(firstName) {
  return this.firstName.setValue(firstName);
}

setLastName(lastName) {
  return this.lastName.setValue(lastName);
}

setEmailAddress(emailAddress) {
  return this.emailAddress.setValue(emailAddress);
}

setMessage(message) {
  return this.message.setValue(message);
}

clickSubmitButton() {
  return this.submitButton.click();
}

submitAllInformation(firstName, lastName, emailAddress, message) {
  if(firstName) {
    this.firstName.setValue(firstName);
  }
  if(lastName) {
    this.lastName.setValue(lastName);
  }
  if(emailAddress) {
    this.emailAddress.setValue(emailAddress);
  }
  if(message) {
    this.message.setValue(message);
  }
  this.submitButton.click();
  this.confirmSuccessfulSubmission();
}

confirmSuccessfulSubmission() {
  browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
  browser.pause(1000);
  const successfulSubmissionHeader = "#contact_reply h1";
  const getHeaderText = successfulSubmissionHeader.isExisting();
  expect(getHeaderText, "Successful submission message doesn't exist").to.equal(true);
}

confirmUnsuccessfulSubmission() {
  browser.newWindow('http://webdriveruniversity.com/Contact-Us/contact_us.php');
  browser.pause(1000);
  const unsuccessfulSubmissionHeader = 'body';
  const getBodyText = unsuccessfulSubmissionHeader.getText();
  expect(getBodyText).to.include('Error: all fields are required');
}
}
module.exports = new ContactUs_Page();
