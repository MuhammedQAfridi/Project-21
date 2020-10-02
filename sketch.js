//The car and wall
var bullet, wall;

//The speed and wieght
var speed, weight;

//The thickness
var thinkness;

function setup(){
  
  createCanvas(1600, 400);
  
  //Random Values
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  bullet=createSprite(50, 250, 25, 12.5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80, 80, 80);

}

function draw(){
  
  background(0);

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed / (thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	
	}

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}