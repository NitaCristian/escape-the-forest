function Mountain (x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;

    this.render = function () {
        noStroke();
        fill(40);
        triangle(
            this.x,
            this.y - 270 * this.scale,
            this.x - 150 * this.scale,
            this.y,
            this.x + 150 * this.scale,
            this.y
        );
        triangle(
            this.x + 90 * this.scale,
            this.y - 210 * this.scale,
            this.x - 70 * this.scale,
            this.y,
            this.x + 200 * this.scale,
            this.y
        );
        triangle(
            this.x - 90 * this.scale,
            this.y - 170 * this.scale,
            this.x - 180 * this.scale,
            this.y,
            this.x + 60 * this.scale,
            this.y
        );
        // Shadow
        fill(50);
        triangle(
            this.x - 20 * this.scale,
            this.y - 170 * this.scale,
            this.x - 150 * this.scale,
            this.y,
            this.x + 160 * this.scale,
            this.y
        );
        triangle(
            this.x + 90 * this.scale,
            this.y - 140 * this.scale,
            this.x - 20 * this.scale,
            this.y,
            this.x + 180 * this.scale,
            this.y
        );
        // Snow
        fill(255);
        quad(
            this.x,
            this.y - 270 * this.scale,
            this.x - 45 * this.scale,
            this.y - 190 * this.scale,
            this.x,
            this.y - 220 * this.scale,
            this.x + 40 * this.scale,
            this.y - 200 * this.scale
        );
        quad(
            this.x + 90 * this.scale,
            this.y - 210 * this.scale,
            this.x + 70 * this.scale,
            this.y - 185 * this.scale,
            this.x + 90 * this.scale,
            this.y - 190 * this.scale,
            this.x + 110 * this.scale,
            this.y - 175 * this.scale
        );

    }


}