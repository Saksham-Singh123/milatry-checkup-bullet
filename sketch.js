var speed,weight,thickness;
var bullet,wall;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200,50, 5);
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(1500,200,60,height/2);
  thickness = random(22,83);
  wall.width = thickness;
  bullet.velocityX = speed;  
  wall.visible = true;
}

function draw() {
  background("white");  
  if(bullet.x-wall.x<wall.width/2+bullet.width/2&&
    wall.x-bullet.x<wall.width/2+bullet.width){
      bullet.velocityX = 0;
      var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor = color(255,0,0);
      }
      
      if(damage<10){
        wall.shapeColor = color(0,255,0);
      }
    }
  drawSprites();
}