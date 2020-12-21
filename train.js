class Train {
  constructor() {
    this.r = 75; //r is height of train
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 5;
  }

  show() {
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
    //rect(this.x, this.y,this.r, this.r);
    image(trainImage, this.x, this.y, this.r, this.r);
  }
}
