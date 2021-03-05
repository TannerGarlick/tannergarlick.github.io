const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    //select output location
    const cards = document.querySelector(".cards");
    const town = document.querySelector('.town');
    const townfilter = towns.filter(town => town.name === "Preston","Fish Haven","Soda Springs")

    townfilter.forEach(town => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let pimg = document.createElement('img');
        // use template literals
        h2.innerHTML = `${town.name}`;
        p.innerHTML = `${town.motto}`;
        h3.innerHTML = `Year Founded: ${town.yearFounded} <br> <br> Population: ${currentPopulation} <br> <br> 
        Annual Rain Fall: ${averageRainfall}`;
        

        pimg.setAttribute('src', town.imageurl);
        pimg.setAttribute('alt', `${town.photo}`)

        pimg.style.boxShadow = '0 0 30px #333';
        pimg.style.width = '200px';

        card.append(h2);
        card.append(pimg);
        utah.appendChild(card);
    });
});