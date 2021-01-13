document.addEventListener("keydown", drawingArrows)

var drawingSpace = document.getElementById("drawing_board");
var drawingSpace2d = drawingSpace.getContext("2d");
var keys = {
    LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 
}

function drawingArrows(arrowPressed)
{ 
    var colorLine = "red";
    var speed = 5;
    var width = 3;
        switch(arrowPressed.keyCode)
        {
            case keys.LEFT:
                drawLine(colorLine, x, y, x - speed, y, drawingSpace2d, width);
                x = x - speed;
                console.log("izquierda"); 
            break;
            case keys.RIGHT:
                drawLine(colorLine, x, y, x + speed, y, drawingSpace2d, width);
                x = x + speed;
                console.log("derecha");
            break;
            case keys.UP:
                drawLine(colorLine, x, y, x, y - speed, drawingSpace2d, width);
                y = y - speed;
                console.log("arriba"); 
            break;
            case keys.DOWN:
                drawLine(colorLine, x, y, x, y + speed, drawingSpace2d, width);
                y = y + speed;
                console.log("abajo"); 
            break;
            default :
                console.log("whatever");
        }
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