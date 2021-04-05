var mario;
var platform1
var platformGroup

function preload()
{}

function setup() {
  createCanvas(displayWidth, 668);
 platformGroup = new Group()
  var  xValue=0
  var gap=random([30,60,80])
  for (i = 0; i <40; i++){
    
 platform1=new Platform(xValue)
 xValue=xValue+platform1.rw
platformGroup.add(platform1.spt)
}
mario=new Player()
}

function draw() {
 
 
  background('skyblue'); 
  translate(-mario.spt.x+width/2,0)
mario.spt.collide(platformGroup)
if(keyDown("left")){
mario.moveLeft()
}

if(keyDown("right")){
  mario.moveRight()
  }

  if(keyDown("up")){
    mario.Jump()
    }

  mario.applyGravity()
 drawSprites();
}

