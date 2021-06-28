let floorPos_y;
let scrollPos;

let trees;
let clouds;
let mountains;
let canyons;
let collectables;

let character;
let flagpole;
let game_score;

function setup () {
    createCanvas(1024, 576);

    // Variable to hold the position of the floor
    floorPos_y = height * 3 / 4;

    // variable to control the background scrolling.
    scrollPos = 0;

    // Variable which stores the character
    character = new Character(width / 2, floorPos_y, width / 2 - -scrollPos);

    // Initialise arrays of scenery objects.

    // Array which holds objects for the trees
    trees = [
        new Tree(100, floorPos_y),
        new Tree(300, floorPos_y),
        new Tree(500, floorPos_y),
        new Tree(1000, floorPos_y),
        new Tree(1200, floorPos_y),
        new Tree(1300, floorPos_y),
        new Tree(1500, floorPos_y),
        new Tree(1700, floorPos_y),
    ];

    // Array which holds objects for the clouds
    clouds = [
        new Cloud(-100, 50, 0.7),
        new Cloud(100, 50, 0.5),
        new Cloud(500, 100, 1),
        new Cloud(900, 110, 1.2),
        new Cloud(1300, 120, 1),
        new Cloud(1700, 50, 0.7),
    ];

    // Array which holds objects for the mountains
    mountains = [
        new Mountain(-125, floorPos_y, 1),
        new Mountain(125, floorPos_y, 1),
        new Mountain(525, floorPos_y, 1.2),
        new Mountain(925, floorPos_y, 0.7),
        new Mountain(1225, floorPos_y, 1),
        new Mountain(1625, floorPos_y, 1.1),
        new Mountain(1925, floorPos_y, 1),
    ];

    // Array which holds objects for the canyons
    canyons = [
        new Canyon(-100, floorPos_y, 80),
        new Canyon(100, floorPos_y, 80),
        new Canyon(400, floorPos_y, 100),
        new Canyon(700, floorPos_y, 70),
        new Canyon(1000, floorPos_y, 80),
        new Canyon(1500, floorPos_y, 100),
    ];

    // Array which holds objects for the collectables
    collectables = [
        new Collectable(-200, 320, 25),
        new Collectable(100, 320, 25),
        new Collectable(450, 350, 40),
        new Collectable(750, 310, 50),
        new Collectable(1150, 300, 45),
        new Collectable(1450, 300, 40),
        new Collectable(1650, 300, 40),
    ];

    game_score = 0;

    flagpole = new Flagpole(2000, floorPos_y);
}

function updateGame () {
    // Check if the flagpole has been reached
    if (flagpole.isReached === false) {
        flagpole.checkCollision(character);
    }

    // Check if the game is over
    if (character.lives < 1) {
        showGameOver();
        return;
    }

    // Check if the level is complete
    if (flagpole.isReached === true) {
        showLevelComplete();
        return;
    }

    // Make the game character move
    character.update();
}

function draw () {
    // fill the sky blue
    background(100, 155, 255);

    noStroke();
    // draw some green ground
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height / 4);

    push();
    translate(scrollPos, 0);

    drawClouds();
    drawMountains();
    drawTrees();
    drawCanyons();
    drawCollectables();
    flagpole.render();

    pop();

    character.render();

    drawLives();
    drawScore();

    updateGame();
}

function keyPressed () {

    // Left arrow
    if (keyCode === 37) {
        character.isLeft = true;
    }

    // Right arrow
    if (keyCode === 39) {
        character.isRight = true;
    }

    // Space bar
    if (keyCode === 32) {
        // If the character is in the air
        if (character.screenY === floorPos_y) {
            character.screenY -= 100;
        }
        // If the player lost or won the game
        if (character.lives < 1 || flagpole.isReached === true) {
            startGame();
            character.lives = 3;
        }
    }
}

function keyReleased () {

    // Move Left
    if (keyCode === 37) {
        character.isLeft = false;
    }

    // Move Right
    if (keyCode === 39) {
        character.isRight = false;
    }
}

// Function to draw cloud objects.
function drawClouds () {
    // Iterate over each cloud object in the clouds array
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].render();
    }
}

// Function to draw mountains objects.
function drawMountains () {
    // Iterate over each mountain object in the mountains array
    for (let i = 0; i < mountains.length; i++) {
        mountains[i].render();
    }
}

// Function to draw trees objects.
function drawTrees () {
    // Iterate over each tree x position in the trees_x array
    for (let i = 0; i < trees.length; i++) {
        trees[i].render();
    }
}

// Function to draw canyons
function drawCanyons () {
    // Iterate over each canyon object in the canyons array
    for (let i = 0; i < canyons.length; i++) {
        canyons[i].render();
        canyons[i].checkCollision(character);
    }
}

// Function to draw collectables
function drawCollectables () {
    // Iterate over each collectable object in the collectable array
    for (let i = 0; i < collectables.length; i++) {
        if (collectables[i].isFound === false) {
            collectables[i].render();
            collectables[i].checkCollision(character);
        }
    }
}

// Function to draw the lives of the player
function drawLives () {
    noStroke();
    fill(255, 0, 0);

    let life_x = 100;
    let life_y = 100;
    let offset = 160;

    for (let i = 0; i < character.lives; i++) {
        // Draw life
        ellipse(life_x * i / 3 + offset + 5.5, life_y - 1, 10, 10);
        ellipse(life_x * i / 3 + offset + 14.5, life_y - 1, 10, 10);
        triangle(
            life_x * i / 3 + offset,
            life_y,
            life_x * i / 3 + 20 + offset,
            life_y,
            life_x * i / 3 + offset + 10,
            life_y + 10
        );
    }
}

// Function to draw the score
function drawScore () {
    fill(0);
    textSize(16);
    text("Score: " + game_score, 50, 110);
}

// Function to reset the state of the game
function startGame () {
    // variable to control the background scrolling.
    scrollPos = 0;

    character.reset(width / 2, floorPos_y, width / 2 - -scrollPos);

    // Array which holds objects for the collectables
    collectables = [
        new Collectable(-200, 320, 25),
        new Collectable(100, 320, 25),
        new Collectable(450, 350, 40),
        new Collectable(750, 310, 50),
        new Collectable(1150, 300, 45),
        new Collectable(1450, 300, 40),
        new Collectable(1650, 300, 40),
    ];

    flagpole.isReached = false;

    game_score = 0;
}

// Function to show the Game Over screen
function showGameOver () {
    // Black overlay
    fill(0, 200);
    rect(0, 0, width, height);

    // Text
    fill(255);
    textSize(60);
    text("Game Over", width / 2 - 150, height / 2);
    textSize(20);
    text("Press space to continue", width / 2 - 100, height / 2 + 40);
}

// Function to show the Level Complete screen
function showLevelComplete () {
    // Black overlay
    fill(0, 200);
    rect(0, 0, width, height);

    // Text
    fill(255);
    textSize(60);
    text("Level Complete", width / 2 - 190, height / 2);
    textSize(30);
    text("You gained " + game_score + " points", width / 2 - 110, height / 2 + 40);
    textSize(20);
    text("Press space to continue", width / 2 - 80, height / 2 + 70);
}