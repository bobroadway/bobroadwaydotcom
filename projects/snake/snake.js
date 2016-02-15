/* 
  JavaScript code for index.php (Snake Game) 
  Author: Bo Broadway Date: 2/11/16 
*/

// Constants
var COLUMNS = 26;
var ROWS = 26;
var RESOLUTION_LOWER_BOUNDARY = 768;
var MAX_CELL_SIZE = 30;
// Grid coordinate state IDs
var EMPTY = 0;
var SNAKE = 1;
var FRUIT = 2;
// Directions
var LEFT = 0;
var UP = 1;
var RIGHT = 2;
var DOWN = 3;
// Key Controls
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_PAUSE = 32; // space bar

// Pause Screen Text
var GAME_CONTROLS = "<p>the game is paused</p>"
    + "<p>key controls: &#8592; &#8593; &#8594; &#8595<br />"
    + "touch controls: tap relative to the snake to turn</p>"
    + "pause/unpause: [spacebar] or 'two-finger tap'</p>";



// Grid
var grid = {

    // instance variables
    width: null,
    height: null,
    _grid: null,
    
    // init function - initializes the grid
    init: function(dfault, columns, rows) {
        this.width = columns;
        this.height = rows;
        this._grid = [];
        
        // create 2d array, populating squares with 'dfault' value for the x and y amounts
        for (var x = 0; x < columns; x++) {
            this._grid.push([]);
            for(var y = 0; y < rows; y++) {
                this._grid[x].push(dfault);
            }
        }
    },
    // accessor methods
    set: function(val, x, y) {
        this._grid[x][y] = val;
    },
    get: function(x, y) {
        return this._grid[x][y];
    }
}

// Snake
var snake = {
    
    // instance variables
    direction: null,
    last: null,
    _queue: null,
    
    // init function - initializes the snake current state
    init: function(direction, x, y) {
        this.direction = direction;
        this._queue = []
        this.insert(x, y);
    },
    
    // function to track the snake's current coordinates
    insert: function(x, y) {
        // place x and y to the front/beginning of the _queue array 
        this._queue.unshift({x:x, y:y})
        // set 'last' to the newly inserted array items
        this.last = this._queue[0];    
    },
    
    // function to determine the next tile of the snake to become 'EMPTY' (tail)
    remove: function() {
        return this._queue.pop(); // return the now removed last item of the array
    }
}

// function to set food location
function setFood() {

    // array to track empty coordinates
    var empty = [];
    
    // track all coordinates of the grid that are empty
    for (var x = 0; x < grid.width; x++) {
        for (var y = 0; y < grid.height; y++) {
            // populate array with all empty coordinates
            if (grid.get(x, y) === EMPTY) {
                empty.push({x:x, y:y});
            }
        }
    }
    
    // math function to determine random array slot given the array length
    var randomPosition = empty[Math.floor(Math.random() * empty.length)];
    // set the randomly determined coordinate to the 'FRUIT' value ie '2'
    grid.set(FRUIT, randomPosition.x, randomPosition.y);
}

// Game Objects
var canvas;
var pauseDiv;
var context;
var gamePaused;
var keystate;
var touchDown;
var touchDirection;
var frames;
var score;
var highScore = 0;

function main() {
    // create canvas element and overlay div
    canvas = document.createElement("canvas");
    pauseDiv = document.createElement("div");
    // place the created canvas within the canvas div
    document.getElementById("canvas-wrap").appendChild(canvas);
    document.getElementById("canvas-wrap").appendChild(pauseDiv);
    
    // determine cell (game tile) size based on screen dimensions
    var windowWidth = $( window ).width();
    var windowHeight = $( window ).height() - $( canvas ).offset().top - 10;
    var minWindowSize = Math.min(windowWidth, windowHeight)
    var canvasMargin = 12;
    var cellSize = Math.floor((minWindowSize - (canvasMargin * 2)) / COLUMNS);
    if (cellSize > MAX_CELL_SIZE) {
        cellSize = MAX_CELL_SIZE;
    }

    // set canvas element's attributes
    canvas.width = COLUMNS * cellSize;
    canvas.height = ROWS * cellSize;
    context = canvas.getContext("2d");
    context.font = "20px Courier New"; // score font
    
    // set pauseScreen's attributes
    widthString = canvas.width + "px";
    heightString = canvas.height + "px";
    //pauseDiv.setAttribute("style", widthString);
    //pauseDiv.setAttribute("style", heightString);
    pauseDiv.style.width = canvas.width + "px";
    pauseDiv.style.height = canvas.height + "px";
    pauseDiv.id = "pauseScreen";
    pauseDiv.innerHTML = GAME_CONTROLS;
    
    // initialize animation state
    frames = 0;
    gamePaused = true;
    keystate = {};
    touchDown = false;
    
    // Controlling the snake with keyboard
    document.addEventListener("keydown", function(event) {
        keystate[event.keyCode] = true;
        if (keystate[KEY_PAUSE]) gamePaused = !gamePaused;
    });
    document.addEventListener("keyup", function(event) {
        delete keystate[event.keyCode];
    });
    
    // Controlling the snake with touch
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            gamePaused = !gamePaused;
            return;
        }
        var offset = $( canvas ).offset();
        var touchX = event.touches[0].pageX;
        var touchY = event.touches[0].pageY;
        var canvasTouchX = touchX - offset.left;
        var canvasTouchY = touchY - offset.top;
        if (snake.direction === UP || snake.direction === DOWN) {
            // if touch x < snake x -- go left!
            if (canvasTouchX < snake.last.x * cellSize) { 
                touchDirection = LEFT;
            } else {
                touchDirection = RIGHT;
            }
        }
        if (snake.direction === LEFT || snake.direction === RIGHT) {
            // if touch y < snake y -- go up!
            if (canvasTouchY < snake.last.y * cellSize) {
                touchDirection = UP;
            } else {
                touchDirection = DOWN;
            }
        }
        touchDown = true;
    });
    
    document.addEventListener("touchend", function(event) {
        touchDown = false;
    });
    
    // start animation
    init();
    // continue animation
    loop();

}

function init() {
    score = 0;
    // create grid
    grid.init(EMPTY, COLUMNS, ROWS);
    
    // create snake start position and state
    var startPosition = {x:Math.floor(COLUMNS/2), y:ROWS-1}; // middle, bottom
    snake.init(UP, startPosition.x, startPosition.y);
    grid.set(SNAKE, startPosition.x, startPosition.y);
    
    // place food
    setFood();
}

function loop() {
    update();
    draw();
    
    window.requestAnimationFrame(loop, canvas);
}

// function to update the current state of the canvas/grid
function update() {
    // increment frames
    frames++;
    
    // pause screen visibility
    if (gamePaused) {
        pauseDiv.style.visibility = "visible";
    } else {
        pauseDiv.style.visibility = "hidden";
    }
    
    // set snake direction from key inputs, can not set new direction if opposite
    if (!gamePaused) {
        if (keystate[KEY_LEFT] && snake.direction !== RIGHT ) snake.direction = LEFT;
        if (keystate[KEY_UP] && snake.direction !== DOWN) snake.direction = UP;
        if (keystate[KEY_RIGHT] && snake.direction !== LEFT) snake.direction = RIGHT;
        if (keystate[KEY_DOWN] && snake.direction !== UP) snake.direction = DOWN;
    }
    
    // set snake direction from touch
    if (touchDown) {
        snake.direction = touchDirection;
    } 
    
    if (frames % 5 === 0 && !gamePaused) { // every 5 frames
        // initialize newX/newY to the most recently added-to-the-front of the grid coordinates
        var newX = snake.last.x;
        var newY = snake.last.y;
        // so we can then:
        // increment or de-increment by one, an axis based on 'direction'
        switch (snake.direction) {
            case LEFT:
                newX--;
                break;
            case UP:
                newY--;
                break;
            case RIGHT:
                newX++;
                break;
            case DOWN:
                newY++;
                break;
        }
        
        // if the snake hits the wall
        if (0 > newX || newX > grid.width-1 || 0 > newY || newY > grid.height-1
        // or hits itself
            || grid.get(newX, newY) === SNAKE) {
            // reboot
            return init();
        }
        
        // if the snake hits the FRUIT
        if (grid.get(newX, newY) === FRUIT) {
            // set current coordinates as a new 'tail' square
            var tail = {x:newX, y:newY};
            // update score, and high score if applicable
            score++;
            if (score > highScore) {
                highScore = score;
            }
            setFood();
        } else {   
            // set the final square as the 'tail' square
            var tail = snake.remove(); 
            // set it to 'empty'
            grid.set(EMPTY, tail.x, tail.y);
        }
        // fill the snake ID into the new coordinates (where the snake is next)
        grid.set(SNAKE, newX, newY);
        // track the snake's new 'front' position
        snake.insert(newX, newY);
    }
}

// function to draw the current state of the game canvas
function draw() {
    // set tile width and height to variables
    var tileWidth = canvas.width/grid.width;
    var tileHeight = canvas.height/grid.height;
    
    // looping through entire 2d array, setting color based on ID
    for (var x = 0; x < grid.width; x++) {
        for (var y = 0; y < grid.height; y++) {
            switch (grid.get(x, y)) {
                case EMPTY:
                    context.fillStyle = "white";
                    if(gamePaused) context.fillStyle = "lightgray";
                    break;
                case SNAKE:
                    context.fillStyle = "darkgreen";
                    if(gamePaused) context.fillStyle = "darkgray";
                    break;
                case FRUIT:
                    context.fillStyle = "red";
                    if(gamePaused) context.fillStyle = "black";
                    break;
            }
            // fill square (left x, top y, right to width, down to height)
            context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
    
    // show score
    context.fillStyle = "black";
    context.fillText("SCORE: " + score, 10, canvas.height-10); // bottom left
    document.getElementById("highScore").innerHTML = "<h2>high score: " + highScore + "</h2>";
}
