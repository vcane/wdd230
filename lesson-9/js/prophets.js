const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // console.table(jsonObject);   temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    // for (let i = 0; i < prophets.length; i++ )
    prophets.forEach((prophets) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dob = document.createElement('p');
      let pob = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = `${prophets.name} ${prophets.lastname}`;
      dob.textContent = `Birthdate: ${prophets.birthdate}`;
      pob.textContent = `Birthplace: ${prophets.birthplace}`;
      image.setAttribute('src', prophets.imageurl);
      image.setAttribute('alt', `${prophets.name} ${prophets.lastname} - ${prophets.order}`);
      image.setAttribute('loading', "lazy");

      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(pob);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    });
  });