const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5508473&APPID=eb878d3545a265149fff584d44daa2a0&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.main.temp;
    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
    const currently = document.querySelector("#currently");
    currently.textContent = jsObject.weather[0].main;
  });