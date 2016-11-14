// var img;
// function preload(){
//   img = loadImage("./img/frame.png");
// }

var c1,c2,c3,c4;

function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('tryout');
  background(255,242,236);
  // var aspectRatio = windowWidth/windowHeight;
  // var imgW = 2796/aspectRatio /3;
  // var imgH = 2242/aspectRatio /3;
  // background(255,242,236);
  // img.resize(imgW,imgH);
  // image(img,windowWidth/2-imgW/2,windowHeight/2-imgH/2);
  // console.log(aspectRatio);
  c1 = '#000000';
  c2 ='#FBF138';
  c3='#CA0088';
  c4='#61ACEC';

}


function draw(){

  push();
  translate(windowWidth/8, windowHeight/8);
  fill(c1);
  beginShape();
  noStroke();
  vertex(278,251);
  vertex(278,505);
  vertex(532,649);
  vertex(457,141);
  endShape(CLOSE);

  fill(c2);
  beginShape();
  noStroke();
  vertex(467,201);
  vertex(497,406);
  vertex(749,372);
  vertex(749,127);
  endShape(CLOSE);

  fill(c3);
  beginShape();
  noStroke();
  vertex(749,127);
  vertex(946,146);
  vertex(946,663);
  vertex(749,372);
  endShape(CLOSE);

  fill(c4)
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

function keyPressed(){
  if(keyCode == 32){
    c1 ='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    c2 ='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    c3 ='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
    c4 ='#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  }
}
