const requestURL =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    //select output location
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let pimg = document.createElement("img");
      // use template literals
      h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
      p.innerHTML = `Date of birth: ${prophet.birthdate} <br> <br> Place of birth: ${prophet.birthplace}`;
      pimg.setAttribute("src", prophet.imageurl);
      pimg.setAttribute(
        "alt",
        `${prophet.name} ${prophet.lastname} - ${prophet.order}`
      );
      pimg.style.boxShadow = '0 0 30px #333';
      card.append(h2);
      card.appendChild(p);
      card.appendChild(pimg);
      cards.append(card);
    });

    /*
        const utah = document.querySelector('.utah');
        const utahfilter = prophets.filter(utahprophet => utahprophet.birthplace == "Utah")

        utahfilter.forEach(utahprophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let pimg = document.createElement('img');
            // use template literals
            h2.innerHTML = `${utahprophet.name} ${utahprophet.lastname}`;

            pimg.setAttribute('src', utahprophet.imageurl);
            pimg.setAttribute('alt', `Portrait of ${utahprophet.name} who was born in 
            ${utahprophet.birthplace} in the year ${utahprophet.birthdate.substring(utahprophet.birthdate.length - 4)}.`)

            pimg.style.boxShadow = '0 0 30px #333';
            pimg.style.width = '200px';

            card.append(h2);
            card.append(pimg);
            utah.appendChild(card);
        });*/
  });
