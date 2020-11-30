
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
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
	stone=new Stone(125, 535, 50)

	mango1=new Mango(790, 130, 50)
	mango2=new Mango(700, 250, 50)
	mango3=new Mango(800, 200, 50)
	mango4=new Mango(900, 250, 50)
	mango5=new Mango(1000, 250, 50)

	rope=new Rope(stone.body, {x:120, y:535})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

   


    image(tree, 850, 350, 500, 600)
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

	text(mouseX+ ":" +mouseY, 50,100)
  
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
	
 
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:120, y:535})
		rope.attach(stone.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	rope.fly()
}

	
function detectollision(lstone,lmango){

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r)
  {
	
	  Matter.Body.setStatic(lmango.body,false);
  }

}