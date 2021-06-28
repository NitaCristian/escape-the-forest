function Character (screenX, screenY, worldX) {
    this.screenX = screenX;
    this.screenY = screenY;
    this.worldX = worldX;

    this.isLeft = false;
    this.isRight = false;
    this.isFalling = false;
    this.isPlummeting = false;

    this.lives = 3;

    this.render = function () {
        if (this.isLeft && this.isFalling) {
            // add your jumping-left code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 7, this.screenY - 60, 14, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 6, this.screenY - 55, 8, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 7, this.screenY - 50, 9, 9, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 60, 13, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 9, this.screenY - 60, 18, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 7, this.screenY - 40, 15, 30, 3);
            fill(255);
            triangle(this.screenX - 6, this.screenY - 40, this.screenX - 2, this.screenY - 40, this.screenX - 4, this.screenY - 30);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 7, this.screenY - 20, 15, 10, 3);
            fill(0);
            rect(this.screenX - 7, this.screenY - 20, 15, 3);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 3, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 8, this.screenY - 2, 10, 5, 5);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 20, this.screenY - 38, 20, 5, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX - 18, this.screenY - 35, 6, 6);
        } else if (this.isRight && this.isFalling) {
            // add your jumping-right code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 7, this.screenY - 60, 14, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 2, this.screenY - 55, 8, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 2, this.screenY - 50, 9, 9, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 60, 13, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 9, this.screenY - 60, 18, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 7, this.screenY - 40, 15, 30, 3);
            fill(255);
            triangle(this.screenX + 7, this.screenY - 40, this.screenX + 3, this.screenY - 40, this.screenX + 5, this.screenY - 30);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 7, this.screenY - 20, 15, 10, 3);
            fill(0);
            rect(this.screenX - 7, this.screenY - 20, 15, 3);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 3, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 3, this.screenY - 2, 10, 5, 5);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 2, this.screenY - 38, 20, 5, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX + 18, this.screenY - 35, 6, 6);
        } else if (this.isLeft) {
            // add your walking left code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 7, this.screenY - 70, 14, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 6, this.screenY - 65, 8, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 7, this.screenY - 60, 9, 9, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 70, 13, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 9, this.screenY - 70, 18, 5, 5);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 3, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 8, this.screenY - 2, 10, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 7, this.screenY - 50, 15, 30, 3);
            fill(255);
            triangle(this.screenX - 6, this.screenY - 50, this.screenX - 2, this.screenY - 50, this.screenX - 4, this.screenY - 40);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 7, this.screenY - 30, 15, 10, 3);
            fill(0);
            rect(this.screenX - 7, this.screenY - 30, 15, 3);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 2, this.screenY - 48, 5, 20, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX, this.screenY - 30, 6, 6);
        } else if (this.isRight) {
            // add your walking right code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 7, this.screenY - 70, 14, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 2, this.screenY - 65, 8, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 2, this.screenY - 60, 9, 9, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 70, 13, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 9, this.screenY - 70, 18, 5, 5);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 3, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 3, this.screenY - 2, 10, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 7, this.screenY - 50, 15, 30, 3);
            fill(255);
            triangle(this.screenX + 7, this.screenY - 50, this.screenX + 3, this.screenY - 50, this.screenX + 5, this.screenY - 40);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 7, this.screenY - 30, 15, 10, 3);
            fill(0);
            rect(this.screenX - 7, this.screenY - 30, 15, 3);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 2, this.screenY - 48, 5, 20, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX, this.screenY - 30, 6, 6);
        } else if (this.isFalling || this.isPlummeting) {
            // add your jumping facing forwards code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 8, this.screenY - 60, 16, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 6, this.screenY - 55, 12, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 7, this.screenY - 50, 14, 10, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 60, 15, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 10, this.screenY - 60, 20, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 10, this.screenY - 40, 20, 30, 3);
            fill(255);
            triangle(this.screenX - 5, this.screenY - 40, this.screenX + 5, this.screenY - 40, this.screenX, this.screenY - 30);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 10, this.screenY - 20, 20, 10, 3);
            fill(0);
            rect(this.screenX - 10, this.screenY - 20, 20, 3);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 15, this.screenY - 58, 5, 20, 5);
            rect(this.screenX + 10, this.screenY - 58, 5, 20, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX - 13, this.screenY - 58, 6, 6);
            ellipse(this.screenX + 13, this.screenY - 58, 6, 6);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 8, this.screenY - 25, 6, 25, 4);
            rect(this.screenX + 2, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 12, this.screenY - 2, 10, 5, 5);
            rect(this.screenX + 2, this.screenY - 2, 10, 5, 5);
        } else {
            // add your standing front facing code
            stroke(0);
            strokeWeight(0.2);
            // Face with Beard
            fill(139, 69, 19); // SaddleBrown
            rect(this.screenX - 8, this.screenY - 70, 16, 18, 5);
            fill(255, 222, 173); // NavajoWhite
            rect(this.screenX - 6, this.screenY - 65, 12, 10, 2);
            fill(139, 69, 19);// SaddleBrown
            rect(this.screenX - 7, this.screenY - 60, 14, 10, 5);
            // Beanie
            fill(139, 0, 0); // DarkRed
            ellipse(this.screenX, this.screenY - 70, 15, 10);
            fill(178, 34, 34); // Firebrick
            rect(this.screenX - 10, this.screenY - 70, 20, 5, 5);
            // Legs
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 8, this.screenY - 25, 6, 25, 4);
            rect(this.screenX + 2, this.screenY - 25, 6, 25, 4);
            // Boots
            fill(210, 105, 30); // Chocolate
            rect(this.screenX - 12, this.screenY - 2, 10, 5, 5);
            rect(this.screenX + 2, this.screenY - 2, 10, 5, 5);
            // Shirt
            fill(165, 42, 42); // Brown
            rect(this.screenX - 10, this.screenY - 50, 20, 30, 3);
            fill(255);
            triangle(this.screenX - 5, this.screenY - 50, this.screenX + 5, this.screenY - 50, this.screenX, this.screenY - 40);
            // Pants
            fill(25, 25, 112); // MidnightBlue
            rect(this.screenX - 10, this.screenY - 30, 20, 10, 3);
            fill(0);
            rect(this.screenX - 10, this.screenY - 30, 20, 3);
            // Arms
            fill(165, 42, 42); // Brown
            rect(this.screenX - 16, this.screenY - 48, 5, 20, 5);
            rect(this.screenX + 11, this.screenY - 48, 5, 20, 5);
            fill(255, 222, 173); // NavajoWhite
            ellipse(this.screenX - 14, this.screenY - 30, 6, 6);
            ellipse(this.screenX + 14, this.screenY - 30, 6, 6);
        }
    }

    this.update = function () {
        if (this.isLeft) {
            if (this.screenX > width * 0.2) {
                this.screenX -= 5;
            } else {
                scrollPos += 5;
            }
        }

        if (this.isRight) {
            if (this.screenX < width * 0.8) {
                this.screenX += 5;
            } else {
                scrollPos -= 5; // negative for moving against the background
            }
        }

        if (this.screenY < floorPos_y) {
            this.isFalling = true;
            this.screenY += 2;
        } else {
            this.isFalling = false;
        }

        if (this.isPlummeting === true) {
            this.screenY += 5;
        }

        this.worldX = this.screenX - scrollPos;

        this.checkFalling();
    }

    this.checkFalling = function () {
        if (this.screenY > floorPos_y + 250) {
            this.lives--;
            if (this.lives > 0) {
                startGame();
            }
        }
    }

    this.reset = function(screenX, screenY, worldX) {
        this.screenX = screenX;
        this.screenY = screenY;
        this.worldX = worldX;

        this.isLeft = false;
        this.isRight = false;
        this.isFalling = false;
        this.isPlummeting = false;
    }

}