class Dustbin{
    constructor(x,y,width,height){
    
    var options = {
        'isStatic':true,
        'density':1.3,
        'friction':2,
        'restitution':1,
       
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height =height ;
    this.image=loadImage("d.png.png") 
    World.add(world,this.body)

}
display(){
    var pos =this.body.position;
   
    rectMode(CENTER);
    fill("green");
    rect(390,610,100,10);
    rectMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
  }
}