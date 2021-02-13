const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box1;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    var options= {
        isStatic: true
    }
    engine = Engine.create();
    world = engine.world;
 box1 = new Box(200,200,50,50,{isStatic: false});
 box2 = new Box(200,100,40,40,{isStatic: false});
 box3 = new Box(200,250,20,400);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box3.display();
    box1.display();
    box2.display();
}