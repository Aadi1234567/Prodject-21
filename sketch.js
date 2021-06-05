var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,10);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
}
 
function draw() {
  


  background("black");
 
 
 
 
 

  

 if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed/(thickness*thickness*thickness);
  if(damage>10){
  bullet.shapeColor=color(255,0,0);
  }
  if(damage<10){
    bullet.shapeColor=color(0,255,0);
  }
 }
 
  drawSprites();
}
function hasCollided(bulletl,walll){
 bulletRightEdge=bulletl.x + bulletl.width;
 wallLeftEdge=walll.x;
 if(bulletRightEdge>wallLeftEdge){
 return true;
 }
 return false;
  }
  
