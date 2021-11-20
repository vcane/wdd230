const currweatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
//console.log(forecastURL);
fetch(currweatherURL)
  .then((response) => response.json())
  .then((currweather) => {
    //console.log(currweather);
    document.querySelector('.t').textContent = Math.round(currweather.main.temp * 10) / 10;
    document.querySelector('.s').textContent = Math.round(currweather.wind.speed * 10) / 10;
    document.querySelector('.humidity').textContent = `${currweather.main.humidity}%`;
    document.querySelector('.cloudiness').textContent = currweather.weather[0].description;
    let f;
    if (currweather.main.temp <= 50 && currweather.wind.speed > 3) {
      f = `${Math.round((35.74 + (0.6215 * currweather.main.temp) - (35.75 * Math.pow(currweather.wind.speed, 0.16)) + (0.4275 * currweather.main.temp * Math.pow(currweather.wind.speed, 0.16)))) * 10 / 10}°F`;
    } else {
      f = "N/A";
    }
    document.querySelector('.f').textContent = f;
  });

const d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecast) => {
    //console.log(forecast);
    const time = forecast.list.filter(time => time.dt_txt.includes('18:00:00'));
    let weekday = 0;
    let temp = 0;
    let icon = 0;
    console.log(time);
    time.forEach((temperature) => {
      //let day = d[new Date(x.dt_txt).getDay()];
      //console.log(day);
      //const weathericon = document.querySelector(`#icon${icon+1}`);
      let imagesrc = `https://openweathermap.org/img/w/${temperature.weather[0].icon}.png`;
      let imagealt = temperature.weather[0].description;
      //console.log(imagesrc);
      //console.log(imagealt);
      document.querySelector(`#day${weekday+1}`).textContent = d[new Date(temperature.dt_txt).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(temperature.main.temp)}°F`;
      document.querySelector(`#icon${icon+1}`).setAttribute('src', imagesrc);
      document.querySelector(`#icon${icon+1}`).setAttribute('alt', imagealt);
      weekday++;
      temp++;
      icon++;
    });


    //const townname = list.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');





    /*.then((response) => response.json())
    .then((forecast) => {
      
      const date = new Date(forecast.list[0].dt_txt);
      console.log(date.toLocaleTimeString('en-US'));
      document.querySelector('.day1').textContent = (forecast.list[0].dt);
    });*/


    /*----------------- weatherapi.js ---------------*/

    /*fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log (jsObject);
      document.getElementById('current-temp').textContent = jsObject.main.temp;
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; //note the concantenation
      const desc = jsObject.weather[0].description; //note how we reference the weather array
      document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
      document.getElementById('icon').setAttribute('src', imagesrc); //focus on the setAttribute() method
      document.getElementById('icon').setAttribute('alt', desc);*/
  });