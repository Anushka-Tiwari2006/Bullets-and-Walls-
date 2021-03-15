var bullet;
var wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1200,800);


  speed= random(223,321)
  weight=random(30,52)
  thickness=random(22,83)


  wall = createSprite(1000, 400, thickness,height/2);
  wall.shapeColor = color(80,80,80)
  bullet = createSprite(50, 400, 50, 5);
}

function draw() {
  background("salmon"); 

  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

  if(hasCollided(bullet,wall)){
    
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);

      textSize(30)
      fill("red")
      text("Material Rejected", 500,300)
      textSize(70)
      text("X", 585,370)

    }

    if(damage<10){

      wall.shapeColor=color(0,255,0);

      textSize(30)
      fill(color(0,255,0))
      text("Material Accepted", 500,300)
      textSize(70)
      text("O", 585,370)

    }
    bullet.velocityX= 0;
  }


  drawSprites();
}

function hasCollided(Lbullet,Lwall){

  var bulletRightEdge=Lbullet.x+Lbullet.width;
  var  wallLeftEdge=Lwall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true
}
return false;
}