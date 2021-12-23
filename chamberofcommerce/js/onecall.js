const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=39.045114&lon=-95.687433&units=imperial&exclude=minutely,hourly&appid=7bac549adf517ccf2fead6b8f3b137c6";
//const weatherdata = "https://api.openweathermap.org/data/2.5/onecall?lat=42.190456&lon=-121.146862&units=imperial&exclude=minutely,hourly&appid=7bac549adf517ccf2fead6b8f3b137c6";
const d = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

fetch(weatherdata)
  .then((response) => response.json())  
  .then((weatherdata) => {
    document.querySelector('.t').textContent = Math.round(weatherdata.current.temp * 10) / 10;
    document.querySelector('.humidity').textContent = `${weatherdata.current.humidity}%`;
    document.querySelector('.cloudiness').textContent = weatherdata.current.weather[0].description;
    let weekday = 0;
    let temp = 0;
    const data = weatherdata.daily.filter(function(data, index) {
      return index < 3;
    });
    data.forEach((y) => { 
      document.querySelector(`#day${weekday+1}`).textContent = d[new Date(y.dt*1000).getDay()];
      document.querySelector(`#temp${temp+1}`).textContent = `${Math.round(y.temp.day)}°F`;
      weekday++
      temp++
    });

    if (weatherdata.alerts != null && weatherdata.alerts.length > 0) {
      
      const alertdiv = document.createElement('div');
      alertdiv.setAttribute('class', "alertcontainer");
      const exitbutton = document.createElement('button');
      exitbutton.textContent = '❌';

      alertdiv.appendChild(exitbutton);
      exitbutton.addEventListener('click', () => {
        document.querySelector('#weatheralert').style.display = 'none';
      });

      weatherdata.alerts.forEach((x) => { 
        let alertheading = document.createElement('p');
        let alertpara = document.createElement('p');
                
        alertheading.setAttribute('class', "alertheading");
        alertpara.setAttribute('class', "alertpara");
        alertheading.textContent = `${x.event}`;
        alertpara.innerHTML = `${x.description}`.replace(/(\n)+/g, '<br />');
                
        alertdiv.appendChild(alertheading);
        alertdiv.appendChild(alertpara);        
        document.querySelector('#weatheralert').appendChild(alertdiv);        
      });
      document.querySelector('#weatheralert').style.display = 'block';      
    }
  });   