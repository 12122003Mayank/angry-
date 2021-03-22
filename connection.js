class Connection 
{
  constructor(x,y) 
  {
   var option = 
   {
       bodyA : x , 
       pointB : y ,
       stiffness : 0.04 , 
       length : 20
   }
   this.connect = Constraint.create(option)
   World.add (myWorld,this.connect)
   this.sling1=loadImage("sling1.png")
   this.sling2=loadImage("sling2.png")
   this.sling3=loadImage("sling3.png")
  }
  
  display ()
  {
    image (this.sling1,100,80) 
    image (this.sling2,70,80) 
   if (this.connect.bodyA!= null ) 
   {  
   var a = (this.connect.bodyA.position)
   var b = (this.connect.pointB)
   line (a.x-10,a.y-5,b.x-10,b.y-5)
   line (a.x+10,a.x+5,b.x+10,b.y+5)
   image (this.sling3,a.x-10,b.x+10)
   }
  }
  breaktheconection ()
  {
    this.connect.bodyA = null;
  }
}
