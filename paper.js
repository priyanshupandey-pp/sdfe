class Paper{
    constructor(x,y,radius){
        var options = {
             'isStatic':false,
            'restitution':0.3,
            'friction':0.8,
            'density':1.9
        }
      
        this.body = Bodies.circle(x,y,radius, options);
        this.radius=radius
        this.image=loadImage("1paper.png.png")
       World.add(world,this.body);
      }
      display(){
        push()
        fill("blue");
        ellipse(RADIUS)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop()
    }   
  }