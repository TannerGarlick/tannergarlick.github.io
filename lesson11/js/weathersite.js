/*  adjustRating  */
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
/*  day  */
function announcement() {
    var answer = document.getElementById("pancakes").classList;
    var day = new Date();
    var number = day.getDay();
  
    if (number == 5) {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
    document.getElementById("pancakes").innerHTML = number;
  }
/*  events-fish  */
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
/*  events-soda  */
const apiURL4 =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL4)
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
/*  events-preston  */
const apiURL5 =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(apiURL5)
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
/*  fishhaven  */


//let cityID = 5604473;
//let appid = 'ec29ac4f0b51381575ece1b569c9e1d1';
//const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${appid}&units=imperial`;
const apiURL6 = `https://api.openweathermap.org/data/2.5/forecast?id=5610815&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial`;
//console.log(apiURL);

fetch(apiURL6)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let apiURL6 = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    let descr = "";

    apiURL6.forEach((x) => {
      let imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`; // note the concatenation

      // loop through each of the forecast days
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`temp${day + 1}`).textContent = x.main.temp;
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc); // focus on the setAttribute() method
      document.getElementById(`icon${day + 1}`).setAttribute("alt", descr);
      day++;
    });
  });
/*  forecast */


//let cityID = 5604473;
//let appid = 'ec29ac4f0b51381575ece1b569c9e1d1';
//const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${appid}&units=imperial`;
const apiURL7 = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial`;
//console.log(apiURL);

fetch(apiURL7)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let apiURL7 = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    let descr = "";

    apiURL7.forEach((x) => {
      let imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`; // note the concatenation

      // loop through each of the forecast days
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`temp${day + 1}`).textContent = x.main.temp;
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc); // focus on the setAttribute() method
      document.getElementById(`icon${day + 1}`).setAttribute("alt", descr);
      day++;
    });
  });
/*  homepage  */
const requestURL8 = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL8)
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
/*  imagehandling  */
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

/*  scripts  */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }  
/*  selectResponse  */
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}
/*  sodasprings  */


//let cityID = 5604473;
//let appid = 'ec29ac4f0b51381575ece1b569c9e1d1';
//const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${appid}&units=imperial`;
const apiURL9 = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial`;
//console.log(apiURL);

fetch(apiURL9)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let apiURL9 = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    let descr = "";

    apiURL9.forEach((x) => {
      let imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`; // note the concatenation

      // loop through each of the forecast days
      let d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`temp${day + 1}`).textContent = x.main.temp;
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc); // focus on the setAttribute() method
      document.getElementById(`icon${day + 1}`).setAttribute("alt", descr);
      day++;
    });
  });

/*  weatherapi-fish  */
const apiURL10 =
  "https://api.openweathermap.org/data/2.5/weather?id=5610815&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial";

fetch(apiURL10)
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

/*  weatherapi-soda  */
const apiURL11 =
  "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial";

fetch(apiURL11)
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
/*  weatherapi  */
const apiURL12 =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ec29ac4f0b51381575ece1b569c9e1d1&units=imperial";

fetch(apiURL12)
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
/*  webfontload  */
WebFont.load({
    google: {
      families: [
        "Roboto",
        "Quattrocento+Sans:wght@700&display=swap",
        "Merriweather:wght@300&display=swap",
        "Montserrat:wght@500&display=swap",
      ],
    },
  });
  
/*  windchill  */
function windchill() {
    const t = parseFloat(document.querySelector("#temperature").textContent);
    const s = parseFloat(document.querySelector("#windspeed").textContent);
    var f;
    
    
    if (t <= 50 && s >= 3) {
      f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
      document.getElementById("windchill").innerHTML = Math.round(f);
    } else {
      document.getElementById("windchill").innerHTML = ("N/A");
    }
    }