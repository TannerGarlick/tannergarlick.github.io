const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject['towns'];

    const cards = document.querySelector('.cards')

    towns.forEach(town => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let pimg = document.createElement("img");

      h2.innerHTML = `${town.name}`;
      p.innerHTML = `${town.motto}`;
      h3.innerHTML = `Year Founded: ${town.yearFounded} <br> <br> Population: ${town.currentPopulation} <br> <br> 
        Annual Rain Fall: ${town.averageRainfall}`;

        /*card.append(h2);
        card.append(h3);
        card.append(p);
        card.append(pimg);
        cards.append(card);*/
    });

      const preston = document.querySelector('.preston');
      
      const listfilter = towns.filter(x => x.name == "Preston");

      listfilter.forEach(prestontown => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let pimg = document.createElement("img");
  
        h2.innerHTML = `${prestontown.name}`;
        p.innerHTML = `${prestontown.motto}`;
        h3.innerHTML = `Year Founded: ${prestontown.yearFounded} <br> <br> Population: ${prestontown.currentPopulation} <br> <br> 
          Annual Rain Fall: ${prestontown.averageRainfall}`;

          pimg.setAttribute('src', `images/${prestontown.photo}`);
          pimg.setAttribute('alt', `Image of ${prestontown.name}`);
          pimg.style.width = '450px';
  
          card.append(pimg);
          card.append(h2);
          card.append(p);
          card.append(h3);
          preston.append(card);
      });

      const fishhaven = document.querySelector('.fishhaven');
      
      const listfilter2 = towns.filter(y => y.name == "Fish Haven");

      listfilter2.forEach(fishhaventown => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let pimg = document.createElement("img");
  
        h2.innerHTML = `${fishhaventown.name}`;
        p.innerHTML = `${fishhaventown.motto}`;
        h3.innerHTML = `Year Founded: ${fishhaventown.yearFounded} <br> <br> Population: ${fishhaventown.currentPopulation} <br> <br> 
          Annual Rain Fall: ${fishhaventown.averageRainfall}`;

          pimg.setAttribute('src', `images/${fishhaventown.photo}`);
          pimg.setAttribute('alt', `Image of ${fishhaventown.name}`);
          pimg.style.width = '450px';
  
          card.append(pimg);
          card.append(h2);
          card.append(p);
          card.append(h3);
          fishhaven.append(card);
      });

      const sodasprings = document.querySelector('.sodasprings');
      
      const listfilter3 = towns.filter(z => z.name == "Soda Springs");

      listfilter3.forEach(sodaspringstown => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let pimg = document.createElement("img");
  
        h2.innerHTML = `${sodaspringstown.name}`;
        p.innerHTML = `${sodaspringstown.motto}`;
        h3.innerHTML = `Year Founded: ${sodaspringstown.yearFounded} <br> <br> Population: ${sodaspringstown.currentPopulation} <br> <br> 
          Annual Rain Fall: ${sodaspringstown.averageRainfall}`;

          pimg.setAttribute('src', `images/${sodaspringstown.photo}`);
          pimg.setAttribute('alt', `Image of ${sodaspringstown.name}`);
          pimg.style.width = '450px';
  
          card.append(pimg);
          card.append(h2);
          card.append(p);
          card.append(h3);
          sodasprings.append(card);
      });
    });