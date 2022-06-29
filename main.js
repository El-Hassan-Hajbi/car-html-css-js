const canva = document.getElementById("myCanvas");
canva.height = window.innerHeight;
canva.width = 200;
const ctx = canva.getContext("2d");
const road = new Road(100, canva.width*0.9);


const car = new Car(100, 100, 30, 50);

animate();

function animate(){
    car.update();
    canva.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}