var speed,weight,thickness;
var bullet,wall;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
 weight=random(400,1500)
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  
wall=createSprite(1200,200,thickness,height/2)
 thickness=random(22,83)  
   
}
function draw() {
  background(0);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(wall.height*wall.height*wall.height);
    if(damage>10){
      wall.shapeColor="red"
    }
   
    if(damage<10){
      wall.shapeColor="green"
    }
  }
  drawSprites();
  
}
