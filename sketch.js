const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld , myEngine , ground
var box1,box2,box3,box4
var piggy1,piggy2
var stick1,stick2,box5,stick3,stick4
var bird,backgroundi,connect
var dumystick;

function preload() {
backgroundi = loadImage ("bg.png")

}

function setup() {
  createCanvas(1200,400);
   
  myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  
  ground = new Ground()
  box1 = new Box(800,370,50,50)
  box2 = new Box(1000,370,50,50)
  box3 = new Box(800,280,50,50)
  box4 = new Box(1000,280,50,50)
  box5 = new Box(900,180,50,50)
  bird = new Bird(100,10,50,50)
  
  

  piggy1 = new Piggy(900,370,50,50)
  piggy2 = new Piggy(900,280,50,50)
 stick1 = new Stick(900,330,20,250,PI/2)
 stick2 = new Stick(900,230,20,250,PI/2)
 stick3 = new Stick(830,180,20,120,PI/4)
 stick4 = new Stick(950,180,20,120,PI/-4)
connect = new Connection(bird.bird,{x:100,y:100})

  
}
function draw() {
  background(backgroundi); 
  Engine.update(myEngine)
  ground.display()
  box1.display()
  box3.display()
  box4.display()
  stick4.display()
  stick1.display()
  stick3.display()
  box5.display()
  stick2.display()
  box2.display()
  bird.display()
  piggy1.display()
  piggy2.display()
 connect.display()
  

   
}
 function mouseDragged()
{
 Matter.Body.setPosition(bird.bird,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
 connect.breaktheconection() 
}
