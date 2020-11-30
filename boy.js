class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y,250, 280)
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
