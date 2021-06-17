class Bird {
     constructor(){
          this.y = height / 2;
          this.x = 64;
     
          this.gravity = 0.6;
          this.lift = -15; //The "force" of the jump
          this.velocity = 0;

          this.brain = new NeuralNetwork(4,4,1); //The Neural Network has 4 input nodes, 4 hidden and 1 output (jump or not)
     }
    
     show = () => {
          fill(255);
          ellipse(this.x, this.y, 32, 32);
     }

     up = () => {
          this.velocity += this.lift;
     }

     think = (pipes) => {

          //Find the closes pipe
          let closest = null;
          let closestDist = Infinity;
          for (let i = 0; i < pipes.length; i++){
               let dist = pipes[i].x - this.x;
               if(dist < closestDist && dist > 0){
                    closest = pipes[i];
                    closestDist = dist;
               }
          }

          let inputs = [];
          inputs[0] = this.y / height;
          inputs[1] = pipes[0].top / height;
          inputs[2] = pipes[0].bottom / height;
          inputs[3] = pipes[0].x / width;

          let output = this.brain.predict(inputs);
          if (output > 0.5) this.up();
     }

     update = () => {
          this.velocity += this.gravity;
          this.y += this.velocity;

          if (this.y > height) {
               this.y = height;
               this.velocity = 0;
          }

          if (this.y < 0) {
               this.y = 0;
               this.velocity = 0;
          }
     }
}