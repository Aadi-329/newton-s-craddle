class Bob{
constructor(x,y){
this.bob=Bodies.circle(x,y,80,{isStatic:true});
World.add(world,this.bob);




}
display(){
  ellipseMode(CENTER)
circle(this.bob.position.x,this.bob.position.y,80)


}


}