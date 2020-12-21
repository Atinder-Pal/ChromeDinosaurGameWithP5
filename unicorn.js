class Unicorn{
    constructor(){
        this.x = 50;
        this.y = height - 50;
        this.vy = 0; //velocity along y axis, it needs it to jump
    }

    jump(){
        this.vy = -5;
    }

    move(){
        this.y +=this.vy;
    }

    show(){
        rect(this.x, this.y, 50, 50);
    }
}