const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject['towns'];

    const cards = document.querySelector('#towns')

    towns.forEach(town => {
      if(town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs')
      {
      let card = document.createElement("section");
      let text = document.createElement('div');
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let pimg = document.createElement("img");

      h2.innerHTML = town.name;
      p3.innerHTML = town.motto;
      h3.innerHTML = "Year Founded: " + town.yearFounded;
        p.innerHTML = "Population: " + town.currentPopulation;
        p2.innerHTML = "Annual Rain Fall: " + town.averageRainfall;
        pimg.setAttribute('src', "images/" + town.photo);
        pimg.setAttribute('alt', "Image of " + town.name);

        text.append(h2);
        text.append(p3);
        text.append(h3);
        text.append(p);
        text.append(p2);
        card.append(text);
        card.append(pimg);
        cards.append(card);
      }
    });
});