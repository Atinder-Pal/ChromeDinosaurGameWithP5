let unicorn;
let unicornImage;
let trainImage;
let backgroundImage;
let trains = [];
let soundClassifier;
let offsetX = 0;

function preload() {
  //Citation https://learn.ml5js.org/#/reference/sound-classifier
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier("SpeechCommands18w", options);
  unicornImage = loadImage("unicorn.png");
  trainImage = loadImage("train.png");
  backgroundImage = loadImage("background.jpg");
}
function setup() {
  createCanvas(800, 500);
  unicorn = new Unicorn();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == "up") {
    unicorn.jump();
  }
}

function keyPressed() {
  if (key == " ") {
    unicorn.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    trains.push(new Train());
  }

  //background(backgroundImage);
  //==========Code for Moving Background==================
  image(backgroundImage,offsetX, 0,width, height);
  image(backgroundImage, offsetX + width, 0, width, height);
  offsetX--;
  if(offsetX <= -width){
    offsetX = 0;
  }
 		
  //=======================================
  for (let t of trains) {
    t.move();
    t.show();
    if (unicorn.hits(t)) {
      console.log("Game Over");
      noLoop();
    }
  }

  unicorn.show();
  unicorn.move();
}
