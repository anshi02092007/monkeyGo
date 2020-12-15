
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var sprite,sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,sprite7,sprite8
var spriteImage , sprite1Image , sprite2Image , sprite3Image , sprite4Image, sprite5Image,sprite6Image,sprite7Image,sprite8Image
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  spriteImage = loadImage("sprite_0.png");
  sprite1Image = loadImage("sprite_1.png");
  sprite2Image = loadImage("sprite_2.png");
  sprite3Image = loadImage("sprite_3.png");
  sprite4Image = loadImage("sprite_4.png");
  sprite5Image = loadImage("sprite_5.png");
  sprite6Image = loadImage("sprite_6.png");
  sprite7Image = loadImage("sprite_7.png");
  sprite8Image = loadImage("sprite_8.png");
  
  obstacleGroup = new Group();
  foodGroup = new Group();
 
}



function setup() {
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.5;
  
  
  
    ground = createSprite(width/2,height,width,2);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
    invisibleGround = createSprite(width/2,height-10,width,125);
  invisibleGround.visible = false;
  
    foodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;

  
}


function draw() {

backgroud(225);
  text("score"+ score,500,50);
  
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(invisibleGround);
    spawnbanana();
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
    }
  }
}
    if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    
  }
  else if (gameState === END) {}
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    

    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
  }
function spawnbanana() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(width+20,height-300,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(cloudImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = trex.depth;
    monkey.depth = trex.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
}
function spawnobstacles(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,height-95,20,30);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;  
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;  
      obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    }
  }}





