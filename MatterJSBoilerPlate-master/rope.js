class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 25
        }
      this.rope=Constraint.create(options);
        World.add(world, this.rope);
    }


    display(){
              line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
       


         
    }
}