
/*window.onload = function ReplaceContentInContainer(id, content) {
  let container = document.getElementById(id);
  container.innerHTML = content;
}*/

window.onload = setInterval(() => { 
  //let div = document.querySelector('#ad');
  //let para = document.createElement('p');
  //para.textContent = 'no';
  let para = 'no';

  if (para == 'no') {
    para = 'yes';
  }
  else {
    para = 'no';
  } 

  document.querySelector('#ad').textContent = para;
}, 3000);