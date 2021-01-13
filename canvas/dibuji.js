var txt = document.getElementById("txt_lineas");

var btm = document.getElementById("boton");
btm.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var alto = d.height;
var lienzo = d.getContext("2d");

dibujarLinea("black", 1, 1, 1, 499);
dibujarLinea("black", 1, 1, 499, 0);
dibujarLinea("black", 0,499,499,499);
dibujarLinea("black", 500,0,500,500);

function dibujarLinea(color, xo, yo, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xo, yo);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(txt.value);
    var l = 1;
    var yt, xt;

    while (l < lineas)
    {
    yt = (alto/lineas) * l;
    xt = (ancho/lineas) * l;
    dibujarLinea("blue", xt, 0, 500, yt);
    l++;
    }

    for (l = 1; l < lineas; l++)
    {
    yt = (alto/lineas) * l;
    xt = (ancho/lineas) * l;
    dibujarLinea("red", 0, yt, xt, 500);
    }
}