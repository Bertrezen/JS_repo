var canvas = document.getElementById("renderCanvas");
var ctx = canvas.getContext("2d");
var offset = 25;

ctx.font = "20px Arial";
ctx.fillText("8", offset / 2 - 5, offset * 2 - 5);
ctx.fillText("7", offset / 2 - 5, offset * 3 - 5);
ctx.fillText("6", offset / 2 - 5, offset * 4 - 5);
// Letters
ctx.fillText("a", offset * 1 + 5, offset / 2 + 5);
ctx.fillText("b", offset * 2 + 5, offset / 2 + 5);
ctx.fillText("c", offset * 3 + 5, offset / 2 + 5);

drawCell(offset, offset, "black");
drawCell(offset * 2, offset, "rgb(220, 220, 220)");
drawCell(offset * 3, offset, "black");
drawCell(offset * 2, offset * 2, "black");
// Borders
drawLine(offset * 9, offset, offset * 9, offset * 9); // Right border
drawLine(offset, offset, offset, offset * 9); // Left border
drawLine(offset, offset, offset * 9, offset); // Top border

function drawCell(x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();       // Start a new path
    ctx.strokeStyle = "green";
    ctx.moveTo(x0, y0);    // Move the pen to (x0, y0)
    ctx.lineTo(x1, y1);    // Draw a line to (x1, y1)
    ctx.stroke();          // Render the path
}