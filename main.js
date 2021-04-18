var canvas = 
document.getElementById("TheCanvas");
ctx = canvas.getContext("2d");

var color = "empty";
var line_width = "empty";
var radius = "empty";

var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("Color").value;
    line_width = document.getElementById("Width_Of_Line").value;
    radius = document.getElementById("Radius").value;
    mouseEvent = "mouseDown" ;
    console.log("in mousedown");
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave" ;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp" ;
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    console.log("in mousemove"+mouseEvent);
    if (mouseEvent == "mouseDown"){
        console.log("Current position of x and y co-ordinates = ");
        console.log("x  =" + current_position_of_mouse_x + "y  =" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2*Math.PI);
        ctx.stroke();
    }
}