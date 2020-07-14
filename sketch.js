
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;
var roof;



function setup() {
	createCanvas(800, 700);	

	engine = Engine.create();
	world = engine.world;
  
  roof = new ground(400,200,300,20);
  
  bob1 = new paper(400,250,10);

  rope1 = new slingshot(bob1.body,roof.body);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();

  bob1.display();

  

  drawSprites();
 
}



