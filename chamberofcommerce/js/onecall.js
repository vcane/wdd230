const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=39.045114&lon=-95.687433&units=imperial&exclude=minutely,hourly&appid=7bac549adf517ccf2fead6b8f3b137c6";
const d = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(weatherdata)
  .then((response) => response.json())
  .then((weatherdata) => {
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
    
    if (weatherdata.alerts.length > 0) {
      console.log(weatherdata.alerts);
      for (i = 0; i < weatherdata.alerts.length; i++) {
        let alertdiv = document.createElement('div');
        let alertheading = document.createElement('p');
        let alertpara = document.createElement('p');

        alertdiv.setAttribute('class', "alertcontainer");
        alertheading.setAttribute('class', "alertheading");
        alertheading.textContent = `${weatherdata.alerts[i].event}`;
        alertpara.textContent = `${weatherdata.alerts[i].description}`;

        alertdiv.appendChild(alertheading);
        alertdiv.appendChild(alertpara);
        document.querySelector('#weatheralert').appendChild(alertdiv);
      }
      document.querySelector('.alert').style.display = 'block';
    }

  });

  