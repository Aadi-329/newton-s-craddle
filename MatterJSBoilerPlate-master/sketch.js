var rope1,ground1
var bob1,bob2,bob3,bob4,bob5
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

	//Create the Bodies Here.
	bob5=new Bob(560,300)
	bob4=new Bob(480,300)
	bob3=new Bob(400,300);
	bob2=new Bob(320,300);
	bob1=new Bob(240,300);
	rope1=new Rope(bob1,ground1)

ground1=new Ground(400,60,400,15);
//rope1=new Rope(ground1,bob1)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  bob5.display();
  bob4.display();
  bob3.display();
  bob2.display();
  bob1.display();
 //rope1.display();
  drawSprites();
 
}



