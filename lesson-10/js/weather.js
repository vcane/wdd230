const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('.t').textContent = Math.round(jsObject.main.temp * 10) / 10;
    document.querySelector('.s').textContent = Math.round(jsObject.wind.speed * 10) / 10;
    document.querySelector('.humidity').textContent = `${jsObject.main.humidity}%`;
    document.querySelector('.cloudiness').textContent = jsObject.weather[0].description;
    let f;
    if (jsObject.main.temp <= 50 && jsObject.wind.speed > 3) {
      f = (35.74 + (0.6215 * jsObject.main.temp) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) + (0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16)));
    } else {
      f = "N/A";
    }
    document.querySelector('.f').textContent = `${Math.round(f * 10) / 10} °F`;
  });