class Ground
{
  constructor() 
  {  
    var features = 
      {
        isStatic : true 
      
      }
      this.ground = Bodies.rectangle (600,380,1200,10,features)
      World.add(myWorld,this.ground)
  }
  display ()
  {
    rectMode(CENTER)
    rect(this.ground.position.x,this.ground.position.y,1200,10)   
  }
}
