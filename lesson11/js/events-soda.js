const apiURL3 =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    let towns = jsObject['towns'];

      const sodasprings = document.querySelector("#sodasprings");
      sodasprings.textContent = towns[0].events[0];
      const sodasprings2 = document.querySelector("#sodasprings2");
      sodasprings2.textContent = towns[0].events[1];
      const sodasprings3 = document.querySelector("#sodasprings3");
      sodasprings3.textContent = towns[0].events[2];
  });