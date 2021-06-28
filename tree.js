function Tree (x, y) {
    this.x = x;
    this.y = y;

    this.render = function () {
        noStroke();
        fill(140, 70, 70);
        rect(this.x, this.y - 100, 20, 100);
        triangle(
            this.x + 10,
            this.y - 20,
            this.x - 10,
            this.y,
            this.x + 30,
            this.y
        );
        // Leaves
        fill(0, 128, 0);
        ellipse(this.x - 20, this.y - 170, 80, 80);
        ellipse(this.x - 40, this.y - 130, 80, 80);
        fill(34, 139, 34);
        ellipse(this.x - 30, this.y - 130, 80, 80);
        ellipse(this.x + 10, this.y - 120, 80, 80);
        fill(0, 128, 0);
        ellipse(this.x - 10, this.y - 140, 80, 80);
        ellipse(this.x + 40, this.y - 140, 80, 80);
        fill(34, 139, 34);
        ellipse(this.x - 20, this.y - 150, 80, 80);
        ellipse(this.x + 30, this.y - 180, 80, 80);
        ellipse(this.x + 40, this.y - 150, 80, 80);

    }
}