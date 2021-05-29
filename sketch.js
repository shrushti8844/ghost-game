var gameState="Play"
function preload(){
  towerImg=loadImage('tower.png');
  doorImg=loadImage('door.png');
  ghostImg=loadImage("ghost-standing.png");
  climberImg=loadImage("climber.png");
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  
  doorsGroup=new Group()
  climbersGroup=new Group()
  invisibleBlocksGroup=new Group()
}
function draw(){
  background(0);
  if(gameState===("Play")){
    
  
  if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("space")){
    ghost.velocityY=-3;
    }
  if(keyDown("right_arrow")){
     ghost.x=ghost.x+2;
              }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-2;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  spawnDoors()
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  } 
  if(invisibleBlocksGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="End"
  }
    
  drawSprites()
  }
  if (gameState===("End")){
    text("GameOver",200,200);
    
  }
}
function spawnDoors(){
  if(frameCount%240===0){
   

   door=createSprite(200,-50);
   door.addImage(doorImg);
   climber=createSprite(200,10);
   climber.addImage(climberImg);
   door.velocityY=1;
   door.x=Math.round(random(120,400)) 
   climber.x=door.x;
    climber.velocityY=1;
    door.lifeime=600;
    doorsGroup.add(door);
    climber.lifetime=600;
    climbersGroup.add(climber);
    ghost.depth=door.depth+1;
    invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
   // invisibleBlock.visible=false;
    invisibleBlock.debug=true;
    invisibleBlocksGroup.add(invisibleBlock);
    invisibleBlock.lifetime=600;
  } 
}