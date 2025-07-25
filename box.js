class Box {
  constructor(options) {
    this.x = options.x ? options.x : 0;
    this.y = options.y ? options.y : 0;
    this.width = options.width ? options.width : 100;
    this.height = options.height ? options.height : 100;
    this.naru = options.naru;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, {
      isStatic: options.isStatic,
      restitution: 1.1,
    });
    World.add(world, this.body);
  }

  show() {
    var randoHodo = random(naruArray);

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    imageMode(CENTER);
    fill(255);
    noStroke();
    translate(pos.x, pos.y);
    if (this.naru) {
      image(this.naru, 0, 0, this.width, this.height);
    }
    pop();
  }

  push() {
    Body.applyForce(this.body, this.body.position, {
      x: random(-1, 1) * 0.015,
      y: random(-1, 1) * 0.015,
    });
  }
}
