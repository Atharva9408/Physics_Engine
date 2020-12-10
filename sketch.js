//PE is a framework  in which objects have properties like gravity,bounce,collide,scale,rotation 
//all principals of physics are applied to obejects which we create in PE
//Matter.js  is a library which is used to apply PE
var World = Matter.World;   // namespacing  
var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();    //create engine
  world=engine.world;        //add world in engine
  var gropro={isStatic:true}   //fix the rectangle
  ground=Bodies.rectangle(200,380,200,20,gropro) ;
  World.add(world,ground);
  var ballpro={restitution:1.0}
  ball=Bodies.circle(200,100,20,ballpro);
  World.add(world,ball);
  console.log(ground.position.x,ground.position.y);
  Engine.run(engine);

}

function draw() {
  background(0,0,0);  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);


}