class Bird
{
  constructor(x,y,w,h) 
  {
    var birdfeatures = {
        restitution : 1
      } 
      this.bird = Bodies.rectangle (x,y,w,h,birdfeatures)
      World.add(myWorld,this.bird)
      this.w = w  
      this.h = h
      this.bimage = loadImage("bird.png")
      this.arr = [];
      this.smokeimage=loadImage("smoke.png")
  }
  display ()
  {
  if (this.bird.velocity.x>2)
   {
     this.arr.push ([this.bird.position.x,this.bird.position.y])
   } 
   console.log(this.arr) 
   for (var i=0;i<this.arr.lenght;i+=1)
   {
     image (this.smokeimage,this.arr[i][0],this.arr[i][1],10,10)
   }
  push ()
  translate (this.bird.position.x,this.bird.position.y) 
  rotate (this.bird.angle)
  imageMode(CENTER)
  image (this.bimage,0,0,this.w,this.h)
  pop ()
  }
}
