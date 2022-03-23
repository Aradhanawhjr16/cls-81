canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 300, 100, 0, 2* Math.PI);
ctx.stroke();


