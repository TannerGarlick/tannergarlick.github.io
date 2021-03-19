const apiURL3 =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    let towns = jsObject['towns'];

      const fishhaven = document.querySelector("#fishhaven");
      fishhaven.textContent = towns[2].events[0];
      const fishhaven2 = document.querySelector("#fishhaven2");
      fishhaven2.textContent = towns[2].events[1];
      const fishhaven3 = document.querySelector("#fishhaven3");
      fishhaven3.textContent = towns[2].events[2];
      const fishhaven4 = document.querySelector("#fishhaven4");
      fishhaven4.textContent = towns[2].events[3];
  });