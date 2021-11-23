fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
    townname.forEach((town) => {
      console.log(townname);
      if (town.name === 'Preston') {
        for (i=0; i < townname.length; i++) {
          let para = document.createElement('p');
          para.textContent = `${town.events[i]}`;
          document.querySelector('div.prestonevents').appendChild(para);
        };
      }

      else if (town.name === 'Soda Springs') {
        for (i=0; i < townname.length; i++) {
          let para = document.createElement('p');
          para.textContent = `${town.events[i]}`;
          document.querySelector('div.ssevents').appendChild(para);
        };
      }

      else {
        for (i=0; i < townname.length; i++) {
          let para = document.createElement('p');
          para.textContent = `${town.events[i]}`;
          document.querySelector('div.fhevents').appendChild(para);
        };
      }

      /*else if (town.name === 'Soda Springs') {
        townname.forEach((x) => {
          let span = document.createElement('span');
          span.textContent = `${town.events}`;
          document.querySelector('div.ssevents').appendChild(span);
        });
      }

      else {
        townname.forEach((x) => {
          let span = document.createElement('span');
          span.textContent = `${town.events}`;
          document.querySelector('div.fhevents').appendChild(span);
        });
      };*/



      /*if (town.name === 'Preston') {
          for (i=0; town.length < i; i++) {
            let span = document.createElement('span');
            span.textContent = `${town.events[i]}`;
            document.querySelector('div.prestonevents').appendChild(span);
          };
          

        }*/


      //document.querySelector('#prestonevents').textContent = town.events;
      //};

    });

  });