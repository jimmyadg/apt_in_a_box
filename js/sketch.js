var img;
function preload(){
  img = loadImage("./img/frame.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255,242,236);
  // var aspectRatio = windowWidth/windowHeight;
  // var imgW = 2796/aspectRatio /3;
  // var imgH = 2242/aspectRatio /3;
  // background(255,242,236);
  // img.resize(imgW,imgH);
  // image(img,windowWidth/2-imgW/2,windowHeight/2-imgH/2);
  // console.log(aspectRatio);
}


function draw(){
  push();
  translate(windowWidth/8, windowHeight/8);
  fill(0,255,0);
  beginShape();
  noStroke();
  vertex(278,251);
  vertex(278,505);
  vertex(532,649);
  vertex(457,141);
  endShape(CLOSE);

  fill(255,0,0);
  beginShape();
  noStroke();
  vertex(467,201);
  vertex(497,406);
  vertex(749,372);
  vertex(749,127);
  endShape(CLOSE);

  fill(0,0,255);
  beginShape();
  noStroke();
  vertex(749,127);
  vertex(946,146);
  vertex(946,663);
  vertex(749,372);
  endShape(CLOSE);

  fill(255,255,0)
  beginShape();
  noStroke();
  vertex(749,127);
  vertex(946,146);
  vertex(946,663);
  vertex(749,372);
  endShape(CLOSE);

  fill(0,255,255)
  beginShape();
  noStroke();
  vertex(749,372);
  vertex(946,663);
  vertex(532,649);
  vertex(497,406);
  endShape(CLOSE);
  pop();
  //ellipse(mouseX,mouseY,10,10);
}
