const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

document.getElementById('currentdate');
currentdate.textContent = date.toLocaleDateString('en-GB', options);