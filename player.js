class Player 
{

constructor()
{
this.x = 200
this.y = 200
this.spt=createSprite(this.x,this.y,100,100) 
this.spt.shapeColor="red"
}

applyGravity(){
    this.spt.velocityY=this.spt.velocityY+2;
}
moveLeft()
{
this.spt.x=this.spt.x-12
}
moveRight()
{
 this.spt.x=this.spt.x+12  
}
Jump(){
    this.spt.velocityY=-20
}

}



