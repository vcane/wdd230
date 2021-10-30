const lastVisit = parseFloat(localStorage.getItem('lastvisit'));
if (lastVisit == null || lastVisit == NaN) {
  document.querySelector('.lastvisit').textContent = "Today is your first time here."
} else {
  document.querySelector('.lastvisit').textContent = `${((Date.now() - lastVisit) / 86400000).toFixed(2)} days since last visit.`
}
localStorage.setItem('lastvisit', Date.now());