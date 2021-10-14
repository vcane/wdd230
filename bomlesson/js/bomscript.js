const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('main');
let para;

button.addEventListener('click', function() {
  let inputText = input.value;
  // the selection block works to add paragraph, but I can't seem to remove the paragraph when
  // an input with text is entered into the input cell, meaning no empty string
  //remove comments to enable selection block  
  /*if (inputText === "") {
    para = document.createElement('p');
    para.textContent = 'Please enter your favorite chapter in the Book of Mormon.';
    main.appendChild(para);
  }*/

  //else {
    
    const listItem = document.createElement('li');
    const listButton = document.createElement('button');
    listItem.textContent = inputText;
    listButton.textContent = '❌';
    listItem.appendChild(listButton);
    list.appendChild(listItem);
    listButton.addEventListener('click', function() {
      list.removeChild(listItem);
    })
    
  //}
  
  input.focus();
  input.value = "";
  //receive the following error if removedChild is in the function or in the selection block
  //Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
  //main.removeChild(para);
  /*if (input =! "") {
    main.removeChild(para);
  }*/
})