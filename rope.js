class Rope{

    constructor(body1, anchor){
        var options = {
            bodyA:body1,
            pointB:anchor,
            length:10,
            stiffness:0.1
        }
        this.pointb=anchor
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}