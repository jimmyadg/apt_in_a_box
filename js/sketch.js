var img;


function preload(){
  img = loadImage("./img/frame.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background(100);
}


function draw(){
  var aspectRatio = windowWidth/windowHeight;
  var imgW = 2796/aspectRatio /3;
  var imgH = 2242/aspectRatio /3; 
  background(255,242,236);
  img.resize(imgW,imgH);
  image(img,windowWidth/2-imgW/2,windowHeight/2-imgH/2);
  beginShape();
  vertex();
  console.log(aspectRatio);
}
