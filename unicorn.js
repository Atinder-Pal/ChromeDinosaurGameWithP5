class Unicorn {
  constructor() {
    this.r = 100; // r is the height of the unicorn
    this.x = 50;
    this.y = height - 50;
    this.vy = 0; //velocity along y axis, it needs it to jump
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  hits(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    //To make boundaries visible
    //ellipseMode(CORNER);
    //ellipse(this.x, this.y, this.r, this.r);

    //rect(this.x, this.y, this.r, this.r);
    // Replace rectangle with unicorn image
    image(unicornImage, this.x, this.y, this.r, this.r);
  }
}
