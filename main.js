
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);

function mtMousedown(e)
{
    //obtém a cor da caixa de iserção
    //início da atividade adicional
    color = document.getElementById("color").value;
    console.log(color);
    //fim da atividade adicional

    mousex = e.clientx - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;

    console.log("X = " + "mouseX +" ",Y = " + mouseY);
    circle(mouseX , mouseY)
}

function circle(mouseX ,mouseY)
{
    ctx.beginPath()
    ctx.stokeStyle = color;
    ctx,lineWidth = 2;
    ctx.arc(mouse.x ,mouseY, 40,0 , 2*Math.PI);
    ctx.stoke();
}

//atividade adicional

function clearArea()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }    

