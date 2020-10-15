var wall, bullet;
var speed, weight, thickness;


function setup() {
  createCanvas(1400,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(70, 200, 70, 5);
  bullet.velocityX = 15;
  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);

}

function draw() {
  background(0);
  bullet.shapeColor = "white";  
  //wall.shapeColor(80, 80, 80);
  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage > 10)
    {
      wall.shapeColor = "red";
    }
    if (damage < 10)
    {
      wall.shapeColor = "green";
    }
    

  }
  drawSprites();
}