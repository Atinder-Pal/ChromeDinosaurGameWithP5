let unicorn;
let unicornImage;
let trainImage;
let backgroundImage;
let trains = [];

function preload(){
  unicornImage = loadImage('unicorn.png');
  trainImage = loadImage('train.png');
  backgroundImage = loadImage('background.jpg');
}
function setup() {
  createCanvas(800, 500);
  unicorn = new Unicorn();
}

function keyPressed(){
  if(key == ' '){
    unicorn.jump();
  }
}

function draw() {
  if(random(1) < 0.01){
    trains.push(new Train());
  }

  background(backgroundImage);
  for(let t of trains){
    t.move();
    t.show();
    if(unicorn.hits(t)){
      console.log('Game Over');
      noLoop();
    }
  }

  unicorn.show();
  unicorn.move();
  
}
