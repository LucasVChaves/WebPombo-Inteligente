class Pipe {

     constructor() {
          let spacing = random(75, 250); //Space between the pipes
          let centery = random(spacing, height - spacing); //Location of the spacing
          this.top = centery - spacing / 2;
          this.bottom = height - (centery + spacing / 2);
          this.x = width;
          this.w = 30;
          this.speed = 3;

          this.highlight = false;
     }

     //Checks whether the current pipe hit or not the bird
     hits = (bird) => {
          if (bird.y < this.top || bird.y > height - this.bottom) {
               if (bird.x > this.x && bird.x < this.x + this.w) {
                    this.highlight = true;
                    return true;
               }
          }
          this.highlight = false;
          return false;
     }

     show = () => {
          fill(100);
          if (this.highlight) fill(215, 0, 0);
          rect(this.x, 0, this.w, this.top);
          rect(this.x, height - this.bottom, this.w, this.bottom);
     }

     update = () => {
          this.x -= this.speed;
     }

     offScreen = () => {
          return this.x < -this.w;
     }
}