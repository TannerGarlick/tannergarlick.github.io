const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.main.temp;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector("#windspeed");
    windspeed.textContent = jsObject.wind.speed;
    const currently = document.querySelector("#currently");
    currently.textContent = jsObject.weather[0].main;
    windchill();
  });
