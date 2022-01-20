function setValueX() {
  let valX = document.getElementById("toSend:X_hidden").getAttribute("value");
  document.getElementById("toSend:_t9").setAttribute("value", valX);
}

function setValueR() {
  let valR = document.getElementById("toSend:R_hidden").getAttribute("value");
  document.getElementById("toSend:_t12").setAttribute("value", valR);
}

// document.getElementById("toSend:_t14").onclick = () => {
//   setValueX();
//   setValueR();
// }

setValueX();
setValueR();

