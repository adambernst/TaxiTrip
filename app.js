/*
 * app.js
 * 
 * by Adam Bernstein
 * 4/18/22
 * for Phenomena Internship Application Coding Assignment
 * 
 * This javascript file uses a canvas to create the graph seen on the site, 
 * and it allows for the interaction of the sliders with the graph
*/

// set up canvas and sliders
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const mSlider = document.getElementById("m-slider");
const bSlider = document.getElementById("b-slider");
const mOutput = document.getElementById("m-num");
const bOutput = document.getElementById("b-num");
const width = 600;
const height = 600;
const graphNum = 15;

/*
 * drawBlankCoordinateGrid
 * 
 * Purpose: to fill in the canvas with grid lines
 * Paramters: none
*/
function drawBlankCoordinateGrid() {
    //erase previous grid
    canvas.width = canvas.width;

    // set brush to be lighter and thinner
    ctx.beginPath();
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 0.2;

    // draw vertical grid lines
    for(var x = 0; x < width; x += width/15) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    // draw horizontal grid lines
    for(var y = height; y > 0; y -= height/15) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

/*
 * graphLine
 * 
 * Purpose: to draw a line on the canvas, using the equation y = mx + b
 * Paramters: m (slope) and b (y-intercept)
*/
function graphLine(m, b) {
    //make sure they're both numbers
    m = +m;
    b = +b;

    drawBlankCoordinateGrid();

    // set starting point for line to be drawn on canvas
    var startX = 0;
    var startY = height * (1 - b / graphNum);
    // set ending point for line to be drawn on canvas
    var endX = width;
    var endY = height * (1 - m - (b / graphNum));

    // paint line in yellow
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "yellow";
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

/*
 * initializePage
 * 
 * Purpose: sets up the graph and sliders at the appropriate default values
 * Paramters: none
*/
function initializePage() {
    drawBlankCoordinateGrid();
    graphLine(mSlider.value, bSlider.value);

    mOutput.innerHTML = mSlider.value; // Display the default slider value
    bOutput.innerHTML = bSlider.value; // Display the default slider value
}

/*
 * main
 * 
 * Purpose: sets up the page, allows sliders to accept user input
 * Paramters: none
*/
function main() {
    initializePage();

    //Update the current slider value (each time you drag the slider handle)
    mSlider.oninput = function() {
        mOutput.innerHTML = mSlider.value;
        graphLine(mSlider.value, bSlider.value);
    }
    
    bSlider.oninput = function() {
        bOutput.innerHTML = bSlider.value;
        graphLine(mSlider.value, bSlider.value);
    }
}

main();






