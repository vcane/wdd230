const date = new Date();
document.getElementById('copyrightyr');
copyrightyr.textContent = date.getFullYear();

document.getElementById('currentdate');
currentdate.textContent = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

function toggleMenu() {
  document.getElementById('primarynav').classList.toggle('hide');
}