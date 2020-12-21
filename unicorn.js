class Unicorn{
    constructor(){
        this.r = 50;
        this.x = 50;
        this.y = height - 50;
        this.vy = 0; //velocity along y axis, it needs it to jump
        this.gravity = 0.5;
    }

    jump(){
        this.vy = -5;
    }

    move(){
        this.y +=this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show(){
        rect(this.x, this.y, this.r, this.r);
    }
}