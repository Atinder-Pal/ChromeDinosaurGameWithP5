let unicorn;

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
  background(220);
  unicorn.show();
  unicorn.move();
}
