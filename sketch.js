var rect1,rect2;

function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(400,100,50,80);
  rect1.shapeColor = "red";
  rect1.velocityY = -5;
  
  rect2 = createSprite(400,800,80,30);
  rect2.shapeColor = "blue"
  rect2.velocityx = 5
}

function draw() {
  background(0);  
  drawSprites();
}
