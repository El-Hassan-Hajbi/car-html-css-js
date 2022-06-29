class Car {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        )
        ctx.fillStyle = "blue";
        ctx.fill();
        
    }
}