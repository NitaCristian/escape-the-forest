function Collectable (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.isFound = false;

    this.render = function () {
        noStroke();
        strokeWeight(2);
        // Back Coin
        fill(255, 170, 0);
        ellipse(this.x + 5, this.y, this.size, this.size);
        // Front Coin
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
        // Front Dent
        stroke(255, 170, 0);
        ellipse(this.x, this.y, this.size - 10, this.size - 10);
    }

    this.checkCollision = function (character) {
        if (dist(character.worldX, character.screenY - 40, this.x, this.y) < 40) {
            this.isFound = true;
            game_score++;
        }
    }
}