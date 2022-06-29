class Car {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = 4.5;
    
        this.control = new Controls();
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
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/3,
            this.y-this.height/3,
            this.width*0.66,
            this.height*0.66
        )
        ctx.fillStyle = "black";
        ctx.fill();
        const begin = {x:this.x,y:this.y-this.height/2} ;
        const width_sensor = canva.width/4;

        const pi = Math.PI;
        ctx.lineWidth = 3;
        ctx.strokeStyle = "yellow";
        for (let i = 1; i<= 6;i++)
        {
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(begin.x, begin.y);
            ctx.lineTo(begin.x + width_sensor*Math.cos(i*pi/(7)),begin.y - width_sensor*Math.sin(i*pi/(7)));
            ctx.stroke();
        }
        
    }
    rotate_left(){

    }
    rotate_right(){
        
    }
    update(){
        if(this.control.forward == true){
            this.y -= this.speed;
        }
        if(this.control.left == true){
            this.rotate_left();

        }
        if(this.control.right == true){
            this.rotate_right();
        }
        if(this.control.reverse == true){
            this.y += this.speed;
        }
    }
}