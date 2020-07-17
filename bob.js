class Bob{
constructor(x,y){
this.body=Bodies.circle(x,y,40,{density:0.2,friction:0.5,restitution:1});

World.add(world,this.body);




}
display(){
var pos=this.body.position
push();
translate(pos.x,pos.y)
ellipseMode(RADIUS)
ellipse(0,0,40,40)

pop();
}


}