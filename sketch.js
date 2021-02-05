var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
  object1.velocityX=5;
  object2 = createSprite(500,100,50,50);
  object2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
 // object1.x = World.mouseX;
 // object1.y = World.mouseY;

 if(isTouching(object1,object2)){
  object1.shapeColor = "red";
  object2.shapeColor = "red";
}
else {
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}
 bounceOff(object1,object2);
  drawSprites();
}
