class Stone{
    constructor(x,y,r){

    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.r=r
    this.image=loadImage("stone.png")
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,50, 50)
    rect(pos.x, pos.y, this.r);
  }
}