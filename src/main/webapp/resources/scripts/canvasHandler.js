
let axis_separator_offset = 5;
let step = 50;
let canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");
canvas.width = 510;
canvas.height = 510;
let width = canvas.width;
let height = canvas.height;
canvas.addEventListener('mousedown', event => clickOnCanvas(canvas, event));


function drawCanvas() {
    let valR = +document.getElementById("toSend:R_hidden").getAttribute("value") * step;
    ctx.globalAlpha = 1;
    drawRectangle(valR);
    drawTriangle(valR);
    drawCircle(valR);
    drawAXIS();
}

function drawTriangle(rValue) {
    ctx.fillStyle = '#3399FF';
    ctx.beginPath();
    ctx.moveTo((width / 2), height / 2);
    ctx.lineTo(width / 2 - rValue, height / 2);
    ctx.lineTo(width / 2, (height / 2) - (rValue / 2));
    ctx.fill();
}

function drawCircle(rValue) {
    ctx.beginPath();
    ctx.fillStyle = '#3399FF';
    ctx.strokeStyle = '#3399FF';
    ctx.arc(width / 2, height / 2, rValue, 0, Math.PI / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
    ctx.stroke();
}

function drawRectangle(rValue) {
    ctx.fillStyle = '#3399FF';
    ctx.strokeStyle = '#3399FF';
    ctx.beginPath();
    ctx.fillRect(width / 2, height / 2, -rValue, rValue);
}

function drawAXIS() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.strokeText("Y", 240, 10);
    ctx.strokeText("X", 500, height / 2 - 10);
    ctx.stroke();
    for (let i = -5; i <= 5; i++) {
        ctx.beginPath();
        let x = width / 2 + step * i;
        ctx.moveTo(x, height / 2 + axis_separator_offset);
        ctx.lineTo(x, height / 2 - axis_separator_offset);
        if (i !== 0) {
            ctx.fillText(i.toString(), x - axis_separator_offset / 2, height / 2 + 3 * axis_separator_offset);
        }
        ctx.stroke();
    }

    for (let i = -5; i <= 5; i++) {
        ctx.beginPath();
        let y = height / 2 + step * i;
        ctx.moveTo(width / 2 + axis_separator_offset, y);
        ctx.lineTo(width / 2 - axis_separator_offset, y);
        if (i !== 0) {
            ctx.fillText((-i).toString(), width / 2 + axis_separator_offset, y + axis_separator_offset);
        }
        ctx.stroke();
    }
}

function drawPoint(x, y) {
    let pointColor = 'orange';
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x * step, canvas.height / 2 - y * step, axis_separator_offset, 0, Math.PI * 2);
    ctx.fillStyle = pointColor;
    ctx.strokeStyle = pointColor;
    ctx.fill();
    ctx.stroke();
}

function clearCanvas() {
    //ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.restore();
}

function refreshCanvas() {
    clearCanvas();
    drawCanvas();
}

function clickOnCanvas(canvas, event) {
    let rect = canvas.getBoundingClientRect()
    let width = canvas.width;
    let height = canvas.height;
    let x = (event.clientX - rect.left - width / 2) / step;
    let y = (height / 2 - event.clientY + rect.top) / step;
    x = x.toFixed(2).replace(".00", "");
    y = y.toFixed(2).replace(".00", "");

    document.getElementById("toSend:_t9").setAttribute("value", x);
    document.getElementById("toSend:Y").setAttribute("value", y);
    document.getElementById("toSend:_t14").click();

}

let valR = 2 * step;
ctx.globalAlpha = 1;
drawRectangle(valR);
drawTriangle(valR);
drawCircle(valR);
drawAXIS();
