let backgroundImg;
let message;

function preload() {
  backgroundImg = loadImage('../assets/bookshelfOneRow.png');
  message = "Expand your screen for the best experience!";
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight + backgroundImg.height - 30);
  canvas.parent('sketch-container');
  // createCanvas(windowWidth, windowHeight + backgroundImg.height - 30);
}

function draw() {
  // image(backgroundImg, windowWidth/2 - 1375/2, windowHeight/2 - 768/2);
  background("black");
  backgroundImgPrint();
  fill("hotpink");
  textSize(20);
  text(message, 10, 80, 270, 80);
  nmsDescript();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight + backgroundImg.height - 30);
}
function backgroundImgPrint() {
    var numSquares = windowWidth/backgroundImg.width;


  //variable for the length of each row
    var sideLen = windowWidth/numSquares;
  //iterates in y-direction to create rows in the y-direction
    for(var y = 0; y < backgroundImg.height * 4; y = y + backgroundImg.height) {
   //iterates in x-direction to create a bookshelf row
    for(var x = 0; x < windowWidth; x = x + sideLen) {
     image(backgroundImg, x, y);
    }
  }
}

function nmsDescript() {
  var nmsDescriptBounds = document.getElementById('articleIconLight').getBoundingClientRect();
  if(mouseX < 1676 && mouseX > 1311 && mouseY < 440 && mouseY > 160) {
    document.getElementById('nmsDescript').style.display = 'inline';
    document.getElementById('articleIconLight').style.display = 'none';
  }
  else {
    document.getElementById('nmsDescript').style.display = 'none';
    document.getElementById('articleIconLight').style.display = 'inline';
  }
}
