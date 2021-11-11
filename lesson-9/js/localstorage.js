/*let lastvisit;
const lastVisit = parseFloat(localStorage.getItem('lastvisit'));
if (lastVisit == null || lastVisit == NaN) { <--- NEEDS TO USE isNaN('lastVisit') TOO TEST THAT CONDITION
  document.querySelector('.lastvisit').textContent = "Today is your first time here."
} else {
  document.querySelector('.lastvisit').textContent = `${((Date.now() - lastVisit) / 86400000).toFixed(2)} days since last visit.`
}
localStorage.setItem('lastvisit', Date.now());*/

const lastVisit = localStorage.getItem('lastvisit');
if (lastVisit == null) {
  document.querySelector('.lastvisit').textContent = "Today is your first time here.";
} else {
  document.querySelector('.lastvisit').textContent = `${((Date.now() - lastVisit) / 86400000).toFixed(2)} days since last visit.`;
}
localStorage.setItem('lastvisit', Date.now());