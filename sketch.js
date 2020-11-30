
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var stone;
var mango1;
var rope;

function preload()
{
	tree= loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600, 670, 1200, 20)
//	tree=new Tree(800, 460, 1, 1)
	boy=new Boy(200, 600, 1, 1)
	stone=new Stone(120, 535, 50)

	mango1=new Mango(750, 310, 1, 1)
	mango2=new Mango(700, 400, 1, 1)
	mango3=new Mango(820, 380, 1, 1)
	mango4=new Mango(900, 320, 1, 1)
	mango5=new Mango(950, 390, 1, 1)

	rope=new Rope(stone.body, {x:50, y:535})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
    image(tree, 800, 460, 200, 200)
	ground.display();
	//tree.display();
	boy.display();
	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	rope.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:120, y:535})
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
	