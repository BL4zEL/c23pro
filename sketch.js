
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rect1=createSprite(575,640,180,30);
	rect1.shapeColor=color(0,255,0);

	rect2=createSprite(500,580,30,100);
	rect2.shapeColor=color(0,255,0);

	rect3=createSprite(680,592,30,125);
	rect3.shapeColor=color(0,255,0);


	//Create the Bodies Here.


	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	rect1 = Bodies.rectangle(400,630, 150, 40 , {isStatic:true} );
	 World.add(world, rect1);
	 
	 rect2 = Bodies.rectangle(315,580,30,150, {isStatic:true} );
	 World.add(world, rect2);
	 
	 rect3 = Bodies.rectangle(435,580,30,150, {isStatic:true} );
	 World.add(world, rect3);
    paperobject = new Paper (100,625,50,{isStatic:false});
	World.add(world, paperobject);
	Engine.run(engine);}


function draw() {
  rectMode(CENTER);
  background(0);
  paperobject.display();
  keyPressed()
  drawSprites();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperobject.body,paperobject.body.position, {x:20,y:-55})
}
}

