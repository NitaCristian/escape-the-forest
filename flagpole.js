function Flagpole (x, y) {
    this.x = x;
    this.y = y;
    this.isReached = false;
    
    this.render = function () {
        stroke(0);
        strokeWeight(1);
        // Pole
        fill(200);
        rect(this.x, this.y - 400, 15, 400, 10);
        // Base
        fill(150, 10, 10);
        rect(this.x - 10, this.y - 20, 35, 20);
        // Flag
        fill(255, 0, 0);
        if (this.isReached === false) {
            rect(this.x, 50, 130, 80);
        } else {
            rect(this.x, 310, 130, 80);
        }
    }

    this.checkCollision = function(character) {
        if (this.x - character.worldX < 10) {
            this.isReached = true;
        }
    }
}