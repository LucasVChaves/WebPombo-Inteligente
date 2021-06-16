var bird;
var pipes = [];

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(25);

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      console.log("ඞ")
    }

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 40 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}