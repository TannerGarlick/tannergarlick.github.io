const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=5508473&APPID=eb878d3545a265149fff584d44daa2a0&units=imperial`;
//console.log(apiURL);

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let apiURL2 = jsObject.list.filter((x) => x.dt_txt.includes("12:00:00"));
    let descr = "";

    apiURL2.forEach((x) => {
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