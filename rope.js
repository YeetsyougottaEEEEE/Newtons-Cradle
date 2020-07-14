class slingshot{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
 
        }
        this.sling=Constraint.create(options);
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
     if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x, pointA.y, pointB.x, pointB.y)
     }
    }
 }