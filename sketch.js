var ship 
var sea



function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea1 = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  var ship = createSprite(200,200,100,100);
  ship.addAnimation("shipGo",shipAnimation);

  ship.scale = 0.5;
 // sea.addImage(sea1);
// sea.velocityX = -5;
  
}

function draw() {
 
 

  background("sea1");



  drawSprites();
}