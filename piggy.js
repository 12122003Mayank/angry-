class Piggy
{
  constructor(x,y,w,h) 
  {
    var piggyfeatures =
      {
        restitution : 1
      } 
      this.piggy = Bodies.rectangle (x,y,w,h,piggyfeatures)
      World.add(myWorld,this.piggy)
      this.w= w  
      this.h = h
      this.pimage = loadImage("enemy.png")
      this.a=255;
  }
  display ()
  {
   console.log(this.piggy.speed) 
   if (this.piggy.speed<3)
  {
    push ()
    translate (this.piggy.position.x,this.piggy.position.y) 
    rotate (this.piggy.angle)
    imageMode(CENTER)
    image (this.pimage,0,0,this.w,this.h)
   pop ()
  }
  else 
  {
    World.remove(myWorld,this.piggy)
    push()
    tint(255,this.a)
    image(this.pimage,this.piggy.position.x,this.piggy.position.y,this.w,this.h)
    this.a-=50;
    pop()
  }
 }
}
