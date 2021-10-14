const today = new Date();
const day = today.getDay();
//const notification = document.querySelector('.pancakes');
const div = document.querySelector('.pancakes');
const event = new Event('build');

if (day == 3) {
  div.addEventListener('build', () => {notification.classList.toggle('responsive')}, false);
}