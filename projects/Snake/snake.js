/* 
  JavaScript code for snake.php 
  Author: Bo Broadway Date: 2/11/16 
*/

// Constants
var COLUMNS = 26;
var ROWS = 26;
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
var context;
var keystate;
var frames;
var score;
var highScore = 0;

function main() {
    if ($( window ).width() < 768) {
        div = document.createElement("div");
        div.id = "sizeError";
        document.body.appendChild(div);
        div.innerHTML = 
            "<h2>I'm afraid your browser window is too small to load the game.</h2>"
            + "<a class='btn btn-primary btn-lg' href='../../projects.php'>Back to Projects</a>";
    } else {
        // create canvas element
        canvas = document.createElement("canvas");
        // set canvas element's attributes
        canvas.width = COLUMNS * 20; // 20px per column
        canvas.height = ROWS * 20; // 20px per row
        // set context to a 2d graphic type
        context = canvas.getContext("2d");
        // place the created canvas element within the body
        document.body.appendChild(canvas);
        
        // score font
        context.font = "20px Courier New";
        
        // initialize animation state
        frames = 0;
        keystate = {};
        
        // Controlling the snake
        document.addEventListener("keydown", function(event) {
            keystate[event.keyCode] = true;
        });
        document.addEventListener("keyup", function(event) {
            delete keystate[event.keyCode];
        });
        
        // start animation
        init();
        // continue animation
        loop();
    }
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
    
    // set snake direction from key inputs, can not set new direction if opposite
    if (keystate[KEY_LEFT] && snake.direction !== RIGHT) snake.direction = LEFT;
    if (keystate[KEY_UP] && snake.direction !== DOWN) snake.direction = UP;
    if (keystate[KEY_RIGHT] && snake.direction !== LEFT) snake.direction = RIGHT;
    if (keystate[KEY_DOWN] && snake.direction !== UP) snake.direction = DOWN;
    
    if (frames % 5 === 0) { // every 5 frames
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
        /*
            tail.x = newX;
            tail.y = newY;
            grid.set(SNAKE, tail.x, tail.y);
            snake.insert(tail.x, tail.y);
        */
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
                    break;
                case SNAKE:
                    context.fillStyle = "green";
                    break;
                case FRUIT:
                    context.fillStyle = "red";
                    break;
            }
            // fill square (left x, top y, right to width, down to height)
            context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
    
    // show score
    context.fillStyle = "black";
    context.fillText("SCORE: " + score, 10, canvas.height-10); // bottom left
    document.getElementById("highScore").innerHTML = "<h1>HIGH SCORE: " + highScore + "</h1>";
}
