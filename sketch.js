
var fixedRect,movingRect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,400);
fixedRect= createSprite(600, 400, 50, 80);
movingRect= createSprite(400, 200, 80, 30);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
fixedRect.debug=true;
movingRect.debug=true;
gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="green";
gameobject2=createSprite(300,100,50,50);
gameobject2.shapeColor="green";
gameobject3=createSprite(500,100,50,50);
gameobject3.shapeColor="green";
gameobject4=createSprite(700,100,50,50);
gameobject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX; 
 movingRect.y=World.mouseY;
  
 if( isTouching(movingRect,gameobject1)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red"; 
 }
else{
  fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
}
  drawSprites();
}
