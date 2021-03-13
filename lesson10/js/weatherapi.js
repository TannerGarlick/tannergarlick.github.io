const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temperature = document.querySelector('#temperature');
    temperature.textContent = jsObject.main.temp;
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector('#windspeed');
    windspeed.textContent = jsObject.wind.speed;
    const currently = document.querySelector('#currently');
    currently.textContent = jsObject.main.feels_like;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    windchill();
  });