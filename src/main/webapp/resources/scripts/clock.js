/* function displayCanvas() {
  var canvasHTML = document.getElementById('clock');
  var contextHTML = canvasHTML.getContext('2d');
  contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);

  //Расчет координат центра и радиуса часов
  var radiusClock = canvasHTML.width / 2 - 10;
  var xCenterClock = canvasHTML.width / 2;
  var yCenterClock = canvasHTML.height / 2;

  //Очистка экрана.
  contextHTML.fillStyle = "#ffffff";
  contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);

  //Рисуем контур часов
  contextHTML.strokeStyle = "#000000";
  contextHTML.lineWidth = 1;
  contextHTML.beginPath();
  contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
  contextHTML.moveTo(xCenterClock, yCenterClock);
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем рисочки часов
  var radiusNum = radiusClock - 10; //Радиус расположения рисочек
  var radiusPoint;
  for (var tm = 0; tm < 60; tm++) {
    contextHTML.beginPath();
    if (tm % 5 == 0) {
      radiusPoint = 5;
    } else {
      radiusPoint = 2;
    } //для выделения часовых рисочек
    var xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
    var yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
    contextHTML.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
    contextHTML.stroke();
    contextHTML.closePath();
  }

  //Оцифровка циферблата часов
  for (var th = 1; th <= 12; th++) {
    contextHTML.beginPath();
    contextHTML.font = 'bold 25px sans-serif';
    var xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
    var yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
    if (th <= 9) {
      contextHTML.strokeText(th, xText - 5, yText + 10);
    } else {
      contextHTML.strokeText(th, xText - 15, yText + 10);
    }
    contextHTML.stroke();
    contextHTML.closePath();
  }


  //Рисуем стрелки
  var lengthSeconds = radiusNum - 10;
  var lengthMinutes = radiusNum - 15;
  var lengthHour = lengthMinutes / 1.5;

  // var d = new Date(); //Получаем экземпляр даты
  // var hours = d.getHours();
  // var minutes = d.getMinutes();
  // var seconds = d.getSeconds();

  var time = document.getElementById("form:outputMessage").innerText.split(":");

  var hours = time[0];
  var minutes = time[1];
  var seconds = (time[2].substr(0, 2));


  var t_sec = 6 * seconds; //Определяем угол для секунд
  var t_min = 6 * (minutes + (1 / 60) * seconds); //Определяем угол для минут
  var t_hour = 30 * (hours + (1 / 60) * minutes); //Определяем угол для часов

  //Рисуем секунды
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#FF0000";
  contextHTML.moveTo(xCenterClock, yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
      yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем минуты
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#000000";
  contextHTML.lineWidth = 3;
  contextHTML.moveTo(xCenterClock, yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
      yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем часы
  contextHTML.beginPath();
  contextHTML.lineWidth = 5;
  contextHTML.moveTo(xCenterClock, yCenterClock);
  contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
      yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
  contextHTML.stroke();
  contextHTML.closePath();

  //Рисуем центр часов
  contextHTML.beginPath();
  contextHTML.strokeStyle = "#000000";
  contextHTML.fillStyle = "#ffffff";
  contextHTML.lineWidth = 3;
  contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
  contextHTML.stroke();
  contextHTML.fill();
  contextHTML.closePath();

  return;
}


window.onload = () => {
  document.getElementById("form:_t8").click();
  displayCanvas();
}

window.setInterval(
    () => {
      document.getElementById("form:_t8").click();
      displayCanvas();
    }, 1000);

*/

const timeout = 8;
let first = true;

function clickButton(callbackFunction) {
  document.getElementById("form:_t8").click();
  let result = callbackFunction();
  return result;
}


function clockPainting() {

  var time = clickButton(() => document.getElementById("form:outputMessage").innerText.split(":"));

  var sec = +(time[2].substr(0, 2));
  var min = +time[1];
  var hr = +time[0];

  var ctx = document.getElementById("clock").getContext("2d");
  ctx.save();// помещаем текущий контекст в стэк

  ctx.clearRect(0,0,150,150);
  ctx.translate(75, 75);
  ctx.scale(0.6, 0.6);
  ctx.rotate(-Math.PI/2);

  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  ctx.save();
  ctx.beginPath();

  for (var i = 0; i < 12; i++) {
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
  }

  ctx.stroke();// нарисовали то, что ранее описали
  ctx.restore();// достаем последний сохраненный контекст из стэка

  ctx.save();
  // рисуем часовую стрелку, вращая холст
  ctx.rotate((Math.PI/6)*hr +
      (Math.PI/360)*min +
      (Math.PI/21600)*sec);
  ctx.lineWidth = 14;

  ctx.beginPath();
  ctx.moveTo(-20,0);

  // линия почти до часовых меток
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  ctx.save();

  // минутная стрелка
  ctx.rotate((Math.PI/30*min) +
      (Math.PI/1800)*sec);
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  ctx.save();

  // секундная стрелка
  if (!first) {
    sec += timeout;
    if (sec >= 60)
      sec %= 60;
  }
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";// цвет контура
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;

  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}
window.onload = function() {
  clockPainting();
  first = false;
  setInterval(clockPainting, timeout * 1000);// функция, перерисовывающая часы
  //через равные промежутки времени
}