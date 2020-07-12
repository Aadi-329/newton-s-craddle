var options
class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
   this.offsetY=offsetY
         options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},

    }
   
      this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }


    display(){
var pointc=this.rope.BodyA.position;
var pointd=this.rope.bodyB.position;

StrokeWeight(2);

             line(pointc.x,pointc.y,pointd.x+this.offsetX,pointd.y+this.offsetY);
       


         
    }
}
