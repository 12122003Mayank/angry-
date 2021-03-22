class Box 
{
  constructor(x,y,w,h) 
  {
    var boxfeatures =
      {
        restitution : 1
      } 
      this.box = Bodies.rectangle (x,y,w,h,boxfeatures)
      World.add(myWorld,this.box)
      this.w= w  
      this.h = h
      this.image = loadImage("wood1.png")
  }
  display ()
  {
    push ()
    translate (this.box.position.x,this.box.position.y) 
    rotate (this.box.angle)
  imageMode(CENTER)
  image (this.image,0,0,this.w,this.h)
  pop ()
  }
}
