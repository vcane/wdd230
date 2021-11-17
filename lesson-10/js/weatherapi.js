const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log (jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //note the concantenation
    const desc = jsObject.weather[0].description; //note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); //focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  /* ------------ rounding ---------------*/
// Math.round(number * 10) / 10