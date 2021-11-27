let currweatherURL = "";
let forecastURL = "";
let currenttown ='';
if (window.location.href === 'https://vcane.github.io/wdd230/lesson-11/sodasprings.html') {
  currweatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  currenttown = 'Soda Springs';
}

else if (window.location.href === 'https://vcane.github.io/wdd230/lesson-11/preston.html') {
  currweatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  currenttown = 'Preston';
}

else {
  currweatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=7bac549adf517ccf2fead6b8f3b137c6";
  currenttown = 'Fish Haven';
};

fetch(currweatherURL)
  .then((response) => response.json())
  .then((currweather) => {
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
    const time = forecast.list.filter(time => time.dt_txt.includes('18:00:00'));
    let weekday = 0;
    let temp = 0;
    let icon = 0;
    time.forEach((temperature) => {
      let imagesrc = `https://openweathermap.org/img/w/${temperature.weather[0].icon}.png`;
      let imagealt = temperature.weather[0].description;
      document.querySelector(`#day${weekday+1}`).textContent = d[new Date(temperature.dt_txt).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(temperature.main.temp)}°F`;
      document.querySelector(`#icon${icon+1}`).setAttribute('src', imagesrc);
      document.querySelector(`#icon${icon+1}`).setAttribute('alt', imagealt);
      weekday++;
      temp++;
      icon++;
    });
  });

fetch('https://byui-cit230.github.io/weather/data/towndata.json')
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const towns = jsonObject['towns'];
  const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
  townname.forEach((town) => {
    if (town.name === currenttown) {
      for (i=0; i < town.events.length; i++) {
        let para = document.createElement('p');
        para.textContent = `${town.events[i]}`;
        document.querySelector('#events').appendChild(para);
      };
    };
  });
});