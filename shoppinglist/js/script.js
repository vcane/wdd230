const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let item = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');
  listText.textContent = item;
  listButton.textContent = 'Delete';
  listItem.appendChild(listText);
  listItem.appendChild(listButton)
  ul.appendChild(listItem);

  listButton.onclick = function(e) {
    ul.removeChild(listItem);
  }

  input.focus();
}

