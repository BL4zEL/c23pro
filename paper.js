class Paper {
    constructor(x, y ,radius) {
      var options = {
        
          'restitution':0.8,
          'friction':1.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,radius, options);
      World.add(world, this.body);
      this.r=radius
    }
    display(){ 
var pos =this.body.position;
 ellipseMode(CENTER)
 fill("purple")
  ellipse(pos.x,pos.y,this.r);   
    }
  };