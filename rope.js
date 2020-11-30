class Rope{

    constructor(body1, anchor){
        var options = {
            bodyA:body1,
            pointB:anchor,
            length:10,
            stiffness:0.05
        }
        this.pointB=anchor
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }
    
    display(){

        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}