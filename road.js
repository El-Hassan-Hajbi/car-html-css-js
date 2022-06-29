class Road {
    constructor(x, width, RoadLine){
        this.x = x;
        this.width = width;
        this.RoadLine = RoadLine;

        this.left = x-width/2;
        this.right = x+width/2;

        this.top = -100000;
        this.bottom = 100000;
        
    }
    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        for (let i = 1; i<=this.RoadLine-1;i++)
        {
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(lerf(this.left, this.right, i/this.RoadLine), this.top);
            ctx.lineTo(lerf(this.left, this.right, i/this.RoadLine), this.bottom);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(lerf(this.left, this.right, 0/this.RoadLine), this.top);
        ctx.lineTo(lerf(this.left, this.right, 0/this.RoadLine), this.bottom);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(lerf(this.left, this.right, 1), this.top);
        ctx.lineTo(lerf(this.left, this.right, 1), this.bottom);
        ctx.stroke();
    }
}