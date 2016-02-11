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
    
    insert: function(x, y) {
        // place x and y to the front/beginning of the _queue array 
        this._queue.unshift({x:x, y:y})
        // set 'last' to the newly inserted array items
        this.last = this._queue[0];    
    },
    
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

function main() {
    // create canvas element
    canvas = document.createElement("canvas");
    // set canvas element's attributes
    canvas.width = COLUMNS * 20; // 20px per column
    canvas.height = ROWS * 20; // 20px per row
    // set context to a 2d graphic type
    context = canvas.getContext("2d");
    // place the created canvas element within the body
    document.body.appendChild(canvas);
    
    // initialize animation state
    frames = 0;
    keystate = {};
    
    // start animation
    init();
    // continue animation
    loop();
}

function init() {
    // create grid
    grid.init(EMPTY, COLUMNS, ROWS);
    
    // create snake start position and state
    var startPosition = {x:Math.floor(COLUMNS/2), y:ROWS-1};
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

// function increment 'frames' variable
function update() {
    frames++;
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
                    context.fillStyle = "blue";
                    break;
                case FRUIT:
                    context.fillStyle = "red";
                    break;
            }
            // fill square (left x, top y, right to width, down to height)
            context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }
}

// main();
