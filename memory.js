// Test if javascript file is reached or not
console.log("memory.js file reached.");

// const = a variable with values that you cant change
// var = a variable with values that you can change whenever you want

// Array with tiles
const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5",
    "tile6", "tile7", "tile8", "tile9", "tile10"
];

// The colors used
const color_array = ["red", "blue", "yellow", "purple", "black"];

// Arrays will hold which tiles are the propriate color
var red_array = [],
    blue_array = [],
    yellow_array = [],
    purple_array = [],
    black_array = [];

// the last tile color clicked
var last_color = "";

// count the amount of clicks made by the user when clicking on tiles
var click = 0;

// store the tile clicked on in this array
var clicked_tiles = [];

// bool if t he same tile is clicked or not
var duplicate_click = false;

// gamestart variable true or false, true = game is active
var game_start = false;

// Adding event listener for tiles and buttons

// The start game button eventListener (click)
document.getElementById("start").addEventListener("click", start_game);

// The reset game button eventListener (click)
document.getElementById("reset").addEventListener("click", reset_game);

// ID tile1 eventListener (click)
document.getElementById("tile1").addEventListener("click", function () {
    tiles("tile1");
});

// ID tile1 eventListener (click)
document.getElementById("tile2").addEventListener("click", function () {
    tiles("tile2");
});

// ID tile1 eventListener (click)
document.getElementById("tile3").addEventListener("click", function () {
    tiles("tile3");
});

// ID tile1 eventListener (click)
document.getElementById("tile4").addEventListener("click", function () {
    tiles("tile4");
});

// ID tile1 eventListener (click)
document.getElementById("tile5").addEventListener("click", function () {
    tiles("tile5");
});

// ID tile1 eventListener (click)
document.getElementById("tile6").addEventListener("click", function () {
    tiles("tile6");
});

// ID tile1 eventListener (click)
document.getElementById("tile7").addEventListener("click", function () {
    tiles("tile7");
});

// ID tile1 eventListener (click)
document.getElementById("tile8").addEventListener("click", function () {
    tiles("tile8");
});

// ID tile1 eventListener (click)
document.getElementById("tile9").addEventListener("click", function () {
    tiles("tile9");
});

// ID tile1 eventListener (click)
document.getElementById("tile10").addEventListener("click", function () {
    tiles("tile10");
});

// Resetting variables that should be reset if you click play or reset game. a shallow variable reset
function reset_var_shallow() {
    // Resetting the last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
        click = 0,
        clicked_tiles = [],
        duplicate_click = false;

    // start game, if variable is true then you can play the game
    game_start = true;

    for (var j = 1; j < 11; j++) {
        var element = "tile" + j;
        document.getElementById(element).style.backgroundColor = "green";
    }
}

// Resetting variables associated with the randomization of tiles placement. this is a deep reset
function reset_var_deep() {
    // Used in the for loop checking how many of each color is chosen
    var red = 0,
        blue = 0,
        yellow = 0,
        purple = 0,
        black = 0;

    // empty the arrays to store new tiles
    red_array = [],
        blue_array = [],
        yellow_array = [],
        purple_array = [],
        black_array = [];

    for (var i = 0; i < 10; i++){
        var nmbr = Math.floor(Math.random() * 5);

        if (nmbr === 0){
            if (red < 2){
                red++;
                red_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 1){
            if (blue < 2){
                blue++;
                blue_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 2){
            if (yellow < 2){
                yellow++;
                yellow_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 3){
            if (purple < 2){
                purple++;
                purple_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 4){
            if (black < 2){
                black++;
                black_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
    }
}

// onload function, getting the game ready when the web page has loaded
window.onload = function(){
    reset_var_deep();

    console.log("onload function is complete");
}

// Clicking play you can try again, tiles have same placement.
function start_game() {
    // this function is used to start_game and reset_game
    reset_var_shallow();

    // console.log("Game has started!");
}

// Completly resets the game, changing placement of tiles
function reset_game() {
    // this function is used to start_game and reset_game
    reset_var_shallow();

    reset_var_deep();

    console.log("Game has reset!");
}

// Main functionally of the game
function tiles(tile) {
    // if game is active
    if (game_start) {
        console.log("The game has started");

        // Checking the array if the tile clicked has been clicked previously
        for (var i = 0; i < clicked_tiles.length; i++) {
            if (tile == clicked_tiles[i]) {
                duplicate_click = true;
                console.log("Duplicate tile clicked");
            }
        }

        // If tile clicked has not been clicked previously during the game
        if (!duplicate_click) {
            clicked_tiles.push(tile);

            // if the tile clicked is red
            if (tile == red_array[0] || tile == red_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (red)
                    if (last_color == "red"){
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[0];
                    last_color = "red";
                }
            }

            // if the tile clicked is blue
            else if (tile == blue_array[0] || tile == blue_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (blue)
                    if (last_color == "blue"){
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[1];
                    last_color = "blue";
                }
            }

            // if the tile clicked is yellow
            else if (tile == yellow_array[0] || tile == yellow_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (yellow)
                    if (last_color == "yellow"){
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[2];
                    last_color = "yellow";
                }
            }

            // if the tile clicked is purple
            else if (tile == purple_array[0] || tile == purple_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (purple)
                    if (last_color == "purple"){
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[3];
                    last_color = "purple";
                }
            }

            // if the tile clicked is black
            else if (tile == black_array[0] || tile == black_array[1]){
                // checking if a tile was previously clicked
                if (last_color.length > 2){
                    // if the previous color is matching (black)
                    if (last_color == "black"){
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[4];
                    last_color = "black";
                }
            }

            click++;
        }

        // Resetting the duplicate click
        duplicate_click = false;
    }
    // if game is not active
    else {
        console.log("The game has not started yet");
    }
}