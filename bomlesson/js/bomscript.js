const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('main');

button.addEventListener('click', function() {
  let inputText = input.value;
  
  
  if (inputText === "") {
    const para = document.createElement('p');
    para.textContent = 'Please enter your favorite chapter in the Book of Mormon.';
    main.appendChild(para);
  }

  else {
    
    const listItem = document.createElement('li');
    const listButton = document.createElement('button');
    listItem.textContent = inputText;
    listButton.textContent = '❌';
    listItem.appendChild(listButton);
    list.appendChild(listItem);
    listButton.addEventListener('click', function() {
      list.removeChild(listItem);
    })
  }
  
  input.focus();
  input.value = "";

  /*if (inputText != "") {
    main.removeChild(para);
  }*/
})