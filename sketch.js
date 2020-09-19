//declaring global variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup;
var score



function preload(){
  
  //loading animation and image
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //creating monkey and ground
  monkey = createSprite(50,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1; 
  
  ground = createSprite(400,300,2400,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  //logging ground.x into console
  console.log(ground.x);
  
  //creating groups
  obstacleGroup = new Group()
  foodGroup = new Group();
  
  
}


function draw() {
  
  //creating the canvas
createCanvas(400,400)
  
  //creating the background
  background(180);
  
  //resetting the ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //calling banana function
  banana();
  
  //calling obstacles function
  obstacles();
  
  //assign 0 to survivalTime
  var survivalTime = 0; 
 
  //creating the text
  stroke('white')
  textSize(20);
  fill('white');
  text("Score : " + score, 500,50);
  
  stroke('black');
  textSize(20);
  fill('black');
  
  //creating score
  survivalTime=Math.ceil(frameCount/frameRate())
  text(" Survival Time : " + survivalTime, 100,50);
  
  
  //making monkey collide to ground
  monkey.collide(ground);
  
  //creating jump
  if(keyDown("space")&& monkey.y >= 264.3) {
     monkey.velocityY = -12;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8

  //displaying sprites
  drawSprites();
  
}

//creating function obstacles
  function obstacles() {
  if (frameCount % 300 === 1) {
  var obstacle = createSprite();

  obstacle.y = 278;
  obstacle.x = 280;
    
    obstacle.addImage("obstacleIMage",obstacleImage);
    obstacle.velocityX=-4
    
    obstacle.scale = 0.1;
}

}

//creating function banana
function banana() {
    if (frameCount % 80 === 0) {

    var banana = createSprite();
  
   
    banana.y = Math.round(random(120,200));
    banana.x = 230
    
    banana.velocityX= -3;
    banana.lifetime=80;  
  
    banana.scale=0.1;
    
    banana.addImage("bananaImage",bananaImage);
    
  //adding banana to foodGroup
     foodGroup.add(banana)
  }
  


}