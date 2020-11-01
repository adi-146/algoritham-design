
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
fixedRect= createSprite(600, 400, 50, 80);
movingRect= createSprite(400, 200, 80, 30);
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
fixedRect.debug=true;
movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
 movingRect.x=World.mouseX; 
 movingRect.y=World.mouseY;

 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){

    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
 }
 else{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
 }
  drawSprites();
}