//t = current temp in degree F;
//s = wind speed in mph;
//f = current windchill = 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t * s^0.16, if t <= 50 && s >= 3;
const t = parseInt(document.querySelector('.t').innerHTML);
const s = parseInt(document.querySelector('.s').innerHTML);
//const t = parseInt(document.getElementById('t').innerHTML);
//const s = parseInt(document.getElementById('s').innerHTML);
let f;
if (t <= 50 && s >= 3) {
  f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(0);
}

else {
  f = "N/A";
}

document.querySelector('.f').textContent = f;
