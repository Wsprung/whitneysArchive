let backgroundImg;
let message;

function preload() {
  backgroundImg = loadImage('../assets/bookshelfOneRow.png');
  message = "Expand your screen for the best experience!";
}
function setup() {
  let canvas = createCanvas(windowWidth, backgroundImg.height * 4.1);
  canvas.parent('sketch-container');
  // createCanvas(windowWidth, windowHeight + backgroundImg.height - 30);
}

function draw() {
  // image(backgroundImg, windowWidth/2 - 1375/2, windowHeight/2 - 768/2);
  background("black");
  backgroundImgPrint();
  fill("hotpink");
  textSize(20);
  // text(message, 10, 80, 270, 80);
  testScoresDescript();
  ccDescript();
  hackathonDescript();
  nmsDescript();
  reportCardDescript();
  flowersDescript();
  apsDescript();
  clDescript();
  sipDescript();
  hhrDescript();
}
function windowResized() {
  resizeCanvas(windowWidth, backgroundImg.height * 4.1);
}
function backgroundImgPrint() {
    var numSquares = windowWidth/backgroundImg.width;


  //variable for the length of each row
    var sideLen = windowWidth/numSquares;
  //iterates in y-direction to create rows in the y-direction
    for(var y = 0; y < backgroundImg.height * 5; y = y + backgroundImg.height) {
   //iterates in x-direction to create a bookshelf row
    for(var x = 0; x < windowWidth; x = x + sideLen) {
     image(backgroundImg, x, y);
    }
  }
}

function testScoresDescript() {
  var testScoresDescriptBounds = document.getElementById('articleIconLight').getBoundingClientRect();
  var right = testScoresDescriptBounds.right;
  var left = testScoresDescriptBounds.left;
  var top = testScoresDescriptBounds.top;
  var bottom = testScoresDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 1123 && mouseX > 758 && mouseY < 417.5 && mouseY > 136.5) {
    document.getElementById('testScoresDescript').style.display = 'inline';
    document.getElementById('articleIconLight').style.display = 'none';
  }
  else {
    document.getElementById('testScoresDescript').style.display = 'none';
    document.getElementById('articleIconLight').style.display = 'inline';
  }
}

function ccDescript() {
  var ccDescriptBounds = document.getElementById('articleIcon').getBoundingClientRect();
  var right = ccDescriptBounds.right;
  var left = ccDescriptBounds.left;
  var top = ccDescriptBounds.top;
  var bottom = ccDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 368 && mouseX > 3 && mouseY < 417.5 && mouseY > 136.5) {
    document.getElementById('ccDescript').style.display = 'inline';
    document.getElementById('articleIcon').style.display = 'none';
  }
  else {
    document.getElementById('ccDescript').style.display = 'none';
    document.getElementById('articleIcon').style.display = 'inline';
  }
}

function hackathonDescript() {
  var hackathonDescriptionBounds = document.getElementById('hackathonIcon').getBoundingClientRect();
  var right = hackathonDescriptionBounds.right;
  var left = hackathonDescriptionBounds.left;
  var top = hackathonDescriptionBounds.top;
  var bottom = hackathonDescriptionBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 1039 && mouseX > 758 && mouseY < 1319 && mouseY > 937) {
    document.getElementById('hackathonDescript').style.display = 'inline';
    document.getElementById('hackathonIcon').style.display = 'none';
  }
  else {
    document.getElementById('hackathonDescript').style.display = 'none';
    document.getElementById('hackathonIcon').style.display = 'inline';
  }
}

function nmsDescript() {
  var nmsDescriptBounds = document.getElementById('awardIcon').getBoundingClientRect();
  var right = nmsDescriptBounds.right;
  var left = nmsDescriptBounds.left;
  var top = nmsDescriptBounds.top;
  var bottom = nmsDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 724 && mouseX > 389 && mouseY < 467 && mouseY > 91) {
    document.getElementById('nmsIconDescript').style.display = 'inline';
    document.getElementById('awardIcon').style.display = 'none';
  }
  else {
    document.getElementById('nmsIconDescript').style.display = 'none';
    document.getElementById('awardIcon').style.display = 'inline';
  }
}

function reportCardDescript() {
  var resumeIconBounds = document.getElementById('articleIcon3').getBoundingClientRect();
  var right = resumeIconBounds.right;
  var left = resumeIconBounds.left;
  var top = resumeIconBounds.top;
  var bottom = resumeIconBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 754 && mouseX > 389 && mouseY < 1272.5 && mouseY > 991.5) {
    document.getElementById('resumeIcon').style.display = 'inline';
    document.getElementById('articleIcon3').style.display = 'none';
  }
  else {
    document.getElementById('resumeIcon').style.display = 'none';
    document.getElementById('articleIcon3').style.display = 'inline';
  }
}

function flowersDescript() {
  var flowerDescriptBounds = document.getElementById('flowerIcon').getBoundingClientRect();
  var right = flowerDescriptBounds.right;
  var left = flowerDescriptBounds.left;
  var top = flowerDescriptBounds.top;
  var bottom = flowerDescriptBounds.bottom;
  // console.log(right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 653 && mouseX > 389 && mouseY < 887 && mouseY > 523) {
    document.getElementById('flowerDescript').style.display = 'inline';
    document.getElementById('flowerIcon').style.display = 'none';
  }
  else {
    document.getElementById('flowerDescript').style.display = 'none';
    document.getElementById('flowerIcon').style.display = 'inline';
  }
}

function apsDescript() {
  var apsDescriptBounds = document.getElementById('awardBadgeIcon').getBoundingClientRect();
  var right = apsDescriptBounds.right;
  var left = apsDescriptBounds.left;
  var top = apsDescriptBounds.top;
  var bottom = apsDescriptBounds.bottom;
  // console.log("aps" + right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 283 && mouseX > 3 && mouseY < 896 && mouseY > 514) {
    document.getElementById('apsDescript').style.display = 'inline';
    document.getElementById('awardBadgeIcon').style.display = 'none';
  }
  else {
    document.getElementById('apsDescript').style.display = 'none';
    document.getElementById('awardBadgeIcon').style.display = 'inline';
  }
}

function clDescript() {
  var clDescriptBounds = document.getElementById('cLIcon').getBoundingClientRect();
  var right = clDescriptBounds.right;
  var left = clDescriptBounds.left;
  var top = clDescriptBounds.top;
  var bottom = clDescriptBounds.bottom;
  // console.log("hhr" + right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 1093 && mouseX > 758 && mouseY < 893 && mouseY > 517) {
    document.getElementById('cLDescript').style.display = 'inline';
    document.getElementById('cLIcon').style.display = 'none';
  }
  else {
    document.getElementById('cLDescript').style.display = 'none';
    document.getElementById('cLIcon').style.display = 'inline';
  }
}

function sipDescript() {
  var sipDescriptBounds = document.getElementById('sipIcon').getBoundingClientRect();
  var right = sipDescriptBounds.right;
  var left = sipDescriptBounds.left;
  var top = sipDescriptBounds.top;
  var bottom = sipDescriptBounds.bottom;
  console.log("sip" + right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 385 && mouseX > 3 && mouseY < 1304 && mouseY > 960) {
    document.getElementById('sipDescript').style.display = 'inline';
    document.getElementById('sipIcon').style.display = 'none';
  }
  else {
    document.getElementById('sipDescript').style.display = 'none';
    document.getElementById('sipIcon').style.display = 'inline';
  }
}

function hhrDescript() {
  var hhrDescript = document.getElementById('awardIcon2').getBoundingClientRect();
  var right = hhrDescript.right;
  var left = hhrDescript.left;
  var top = hhrDescript.top;
  var bottom = hhrDescript.bottom;
  console.log("hhr" + right + "  " + left + "  " + top + "  " + bottom);
  if(mouseX < 368 && mouseX > 33 && mouseY < 1731 && mouseY > 1355) {
    document.getElementById('hhrDescript').style.display = 'inline';
    document.getElementById('awardIcon2').style.display = 'none';
  }
  else {
    document.getElementById('hhrDescript').style.display = 'none';
    document.getElementById('awardIcon2').style.display = 'inline';
  }
}
