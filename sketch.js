let unicorn;
let unicornImage;
let trainImage;
let backgroundImage;

function preload(){
  unicornImage = loadImage('unicorn.png');
  trainImage = loadImage('train.png');
  backgroundImage = loadImage('background.jpg');
}
function setup() {
  createCanvas(400, 400);
  unicorn = new Unicorn();
}

function keyPressed(){
  if(key == ' '){
    unicorn.jump();
  }
}

function draw() {
  background(backgroundImage);
  unicorn.show();
  unicorn.move();
}
