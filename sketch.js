const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,dustbin,dustbin1,dustbin2,a;
var ground;

function setup() {
        createCanvas(800, 400);
        engine = Engine.create();
        world = engine.world;
        Engine.run(engine);


        //Create the Bodies Here.
        
        paper=new Paper(100,300,20);
        dustbin=new Dustbin(650,300,83,80,{isStatic:true})

        ground=Bodies.rectangle(width/2,400,width,10,
{
        isStatic:true
})
        World.add(world,ground);
}


function draw() {
  background(0);	
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)
  paper.display();
  dustbin.display();
  


 
}
function keyPressed () {
        if(keyCode === UP_ARROW){
                Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-109});
        }
}