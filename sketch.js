var rope1,ground1,rope2,rope3,rope4,rope5
var bob1,bob2,bob3,bob4,bob5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
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
	bob1=new Bob(240,300)
	//ground2=new Ground(400,680,800,25)
	ground1=new Ground(400,20,400,25)
	//rope1=new SlingShot(bob1.body,{x:200,y:100})


	



rope1=new Rope(bob1.body,ground1.body,-80*2,0)
rope2=new Rope(bob2.body,ground1.body,-40*2,0)
rope3=new Rope(bob3.body,ground1.body,0,0)
rope4=new Rope(bob4.body,ground1.body,+40*2,0)
rope5=new Rope(bob5.body,ground1.body,+80*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
//  ground2.display();
 bob5.display();
 bob4.display();
  bob3.display();
  bob2.display();
  bob1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 //console.log(options);
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:0})
}}