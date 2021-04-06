// beforeEach(function() {
//   browser.url("https://www.w3schools.com/html/html5_video.asp");
// });

describe("Video test", async function() {
  browser.addCommand("isVideoPaused", function() {
    let isPaused = browser.execute(function(){
      console.log("Outputted inside the console window");

      let video = document.querrySelector("#video1");
      return video.paused;
    })
    return isPaused.value;
  });

  it("Check that the video is paused when accessing the page", async function(done) {
    await browser.url("https://www.w3schools.com/html/html5_video.asp");
    this.timeout(20000);
    let isPaused = browser.isVideoPaused();
    expect(isPaused).to.be.(true);
    browser.pause(3000);

    // let elem = $("option[value='java']");
    // console.log(elem.isSelected());
    // expect(elem.isSelected()).to.equal(true);
  });

  it("Alter the width of the video", async function(done) {
    await browser.url("https://www.w3schools.com/html/html5_video.asp");
    let videoWidth = browser.execute(function() {
      let video = document.querrySelector("#video1");
      return video.style.width = "300px";
    });
    browser.pause(3000);

    // let elem = $("option[value='maven']");
    // console.log(elem.isSelected());
    // expect(elem.isSelected()).to.equal(false);
  });
});
