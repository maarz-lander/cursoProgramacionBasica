var drawingSpace = document.getElementById("drawing_board");
var drawingSpace2d = drawingSpace.getContext("2d");

drawingSpace.addEventListener("mousedown", startDrawingMouse);
drawingSpace.addEventListener("mousemove", drawingMouse);
drawingSpace.addEventListener("mouseup", stopDrawingMouse);

drawLine("black", 0, 0, 800, 0, drawingSpace2d, 7);
drawLine("black", 800, 0, 800, 500, drawingSpace2d, 7);
drawLine("black", 800, 500, 0, 500, drawingSpace2d, 7);
drawLine("black", 0, 500, 0, 0, drawingSpace2d, 7);

var clickStatus = 0;
var width = 3;
var colorLine = "blue";
var x, y;


function startDrawingMouse(clickEvent)
{
    clickStatus = 1;
    x = clickEvent.layerX;
    y = clickEvent.layerY;
    console.log(clickEvent);
    console.log("click");
}

function stopDrawingMouse(clickEvent)
{
    clickStatus = 0;
    x = clickEvent.layerX;
    y = clickEvent.layerY;
    console.log(clickEvent);
    console.log("click finished");
}

function drawingMouse(moveEvent)
{
    if(clickStatus == 1)
    {
        drawLine( colorLine, x, y, moveEvent.layerX, moveEvent.layerY, drawingSpace2d, width);
    }
    x = moveEvent.layerX;
    y = moveEvent.layerY
}

function drawLine(color, xo, yo, xf, yf, space, width)
{
    space.beginPath();
    space.strokeStyle = color;
    space.lineWidth = width;
    space.moveTo(xo, yo);
    space.lineTo(xf, yf);
    space.stroke();
    space.closePath();
}

