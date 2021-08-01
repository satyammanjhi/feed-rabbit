var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
 
function draw() {
  background(0);
  spawnapples();
  spawnleaf();
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}
function spawnapples(){
 if  (frameCount%80===0 ){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY = apple.velocityY + 1.5
  apple.lifetime = 135
 }
}
function spawnleaf(){
  if  (frameCount%70===0 ){
   leaf=createSprite(random(70,300),40,10,10);
   leaf.addImage(leafImg);
   leaf.scale=0.1;
   leaf.velocityY = leaf.velocityY + 1
   leaf.lifetime = 200;
  }
 }


