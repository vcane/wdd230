const currenttown = window.location.href;
const sodasprings = 'http://127.0.0.1:5500/lesson-11/sodasprings.html';
const preston = 'http://127.0.0.1:5500/lesson-11/preston.html';
const fishhaven = 'http://127.0.0.1:5500/lesson-11/fishhaven.html';
//const type = typeof(sodasprings);
//console.log(type);
if (currenttown === sodasprings || currenttown === preston || currenttown === fishhaven) {
  console.log(currenttown);
  
};