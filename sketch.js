const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world,object

function setup() { 
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
var object_options={
isStatic:true

}
 object= Bodies.rectangle(100,390,600,50,object_options)
 World.add(world,object)
 console.log(object)
 console.log(object.type)
 console.log(object.position.x)
 console.log(object.position.y)

}


function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
 rect(object.position.x,object.position.y,150,50)
 
}