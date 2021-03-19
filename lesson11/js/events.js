const apiURL3 =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    let towns = jsObject['towns'];

      const preston = document.querySelector("#preston");
      preston.textContent = towns[6].events[0];
      const preston2 = document.querySelector("#preston2");
      preston2.textContent = towns[6].events[1];
      const preston3 = document.querySelector("#preston3");
      preston3.textContent = towns[6].events[2];
  });