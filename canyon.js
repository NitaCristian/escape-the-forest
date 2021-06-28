function Canyon (x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;

    this.render = function () {
        noStroke();
        // Hole
        fill(100, 155, 255);
        rect(this.x, this.y, this.width, 145);
        // Sides
        fill(100);
        rect(this.x, this.y - 2, 10, 145);
        rect(this.x + this.width - 10, this.y - 2, 10, 145);
    }

    this.checkCollision = function (character) {
        if (character.worldX > this.x + 10 && character.worldX < this.x + this.width - 10 && character.screenY >= this.y) {
            character.isPlummeting = true;
        }
    }
}