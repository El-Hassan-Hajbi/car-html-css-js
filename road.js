class Road {
    constructor(x, width){
        this.x = x;
        this.width = width;

        this.
        this.constante = x-width/2;
        
    }
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.beginPath();
        
        ctx.moveTo(this.constante, -10000000);
        ctx.lineTo(this.constante, 1000000);
        ctx.stroke();
    }
}