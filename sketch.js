
var monkey , monkey_running
var banana ,bananaImg, stone, stoneImg
var FoodGroup, stoneGroup
var Time=0
var backgroundimg

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  backgroundimg=loadImage("download.jpg")
  bananaImg = loadImage("banana.png");
  stoneImg = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(400,400)
  monkey=createSprite(50,250,30,30)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2
  ground=createSprite(400,310,900,10)
  ground.velocityX=-4
  ground.visible=false
  stoneGroup=createGroup()
  FoodGroup=createGroup()
  
  
}


function draw() 
{
  background(backgroundimg) 
  background.x=background.width/2
  ground.x=ground.width/2 
  textSize(20)
  text(Time,235,25)
  textSize(20)
   fill("white")
  text("Survival Time :",100,24)
 
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-10 }
  
 monkey.velocityY = monkey.velocityY + 0.8 
 monkey.collide(ground)

  Time=Time=Math.round(frameCount/10)
  
  
  
  
  stones()
  food()
  drawSprites()
}

function food(){
  if(frameCount % 80===0){
  banana=createSprite(499,130,10,10)  
  banana.addImage(bananaImg) 
  banana.scale=0.1
  banana.y=Math.round(random(100,200))   
  banana.velocityX=-4   
  banana.setLifetime=0   
  FoodGroup.add(banana) }}
  
function stones(){
  if(frameCount % 150===0){
  stone=createSprite(499,309,15,10)
  stone.addImage(stoneImg) 
  stone.scale=0.2
  stone.y=Math.round(random(280,281))
  stone.velocityX=-5
  stone.setLifetime=0
  stoneGroup.add(stone) }} 
  
 
  
  
  
  
  





