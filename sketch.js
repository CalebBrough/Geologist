const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer, stone, rubber;

function preload() {
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 490, 1000, 10);
	hammer = new Hammer(530, 0, 100, 50);
	stone = new Stone(500, 250, 100, 100);
	rubber = new Rubber(800, 300, 25);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0, 200, 255);
  
	hammer.body.position.x=mouseX;
	hammer.body.position.y=mouseY;

	ground.display();
	hammer.display();
	stone.display();
	rubber.display();
	drawSprites();
}



