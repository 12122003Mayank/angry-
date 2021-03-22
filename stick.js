class Stick 
{
  constructor(x,y,w,h,A) 
  {
    var stickfeatures = {
        restitution : 1
      } 
      this.stick = Bodies.rectangle (x,y,w,h,stickfeatures)
      Matter.Body.setAngle (this.stick,A)
      World.add(myWorld,this.stick)
      this.w= w  
      this.h = h
      this.simage = loadImage("wood2.png")

  }
  display ()
  {
    push ()
    translate (this.stick.position.x,this.stick.position.y) 
    rotate (this.stick.angle)
  imageMode(CENTER)
  image (this.simage,0,0,this.w,this.h)
  pop ()
  }
}
