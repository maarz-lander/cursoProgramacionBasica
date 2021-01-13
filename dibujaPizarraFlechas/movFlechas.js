var teclas = {
    LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x = cuadrito.width / 2;
var y = cuadrito.height / 2; 


dibujarLinea("red", x-1, y+1, x+1, y-1, papel)


function dibujarTeclado(evento)
{ 
    var colorcito = "blue";
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("izquierda"); 
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("derecha");
        break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("arriba"); 
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("abajo"); 
        break;
        default :
            console.log("whatever");
    }
}

function dibujarLinea(color, xo, yo, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2.5;
    lienzo.moveTo(xo, yo);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}