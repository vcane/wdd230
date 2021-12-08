const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=39.045114&lon=-95.687433&units=imperial&exclude=minutely,hourly&appid=7bac549adf517ccf2fead6b8f3b137c6";
const d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(weatherdata)
  .then((response) => response.json())
  .then((weatherdata) => {
    console.log(weatherdata);
    document.querySelector('.t').textContent = Math.round(weatherdata.current.temp * 10) / 10;
    document.querySelector('.humidity').textContent = `${weatherdata.current.humidity}%`;
    document.querySelector('.cloudiness').textContent = weatherdata.current.weather[0].description;
    let weekday = 0;
    let temp = 0;
    for (i=0; i < weatherdata.daily.length-5; i++) {
      document.querySelector(`#day${weekday+1}`).textContent = d[new Date(weatherdata.daily[i].dt*1000).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(weatherdata.daily[i].temp.day)}°F`;
      weekday++
      temp++
    };
  });

  