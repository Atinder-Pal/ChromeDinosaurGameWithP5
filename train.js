class Train {
    constructor(){
        this.r = 100;//r is height of train
        this.x = width;
        this.y = height -this.r;        
    }

    move(){
        this.x -= 5   ;
    }

    show(){
        image(trainImage, this.x, this.y,this.r, this.r);
    }
}