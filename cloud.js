function Cloud (x, y, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;

    this.render = function () {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, 100 * this.scale, 100 * this.scale);
        ellipse(this.x - (40 * this.scale), this.y, 80 * this.scale, 80 * this.scale);
        ellipse(this.x + (40 * this.scale), this.y, 80 * this.scale, 80 * this.scale);
        ellipse(this.x - (75 * this.scale), this.y, 50 * this.scale, 50 * this.scale);
        ellipse(this.x + (75 * this.scale), this.y, 50 * this.scale, 50 * this.scale);
    }
}