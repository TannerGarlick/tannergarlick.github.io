const apiURL5 = "https://api.openweathermap.org/data/2.5/onecall?lat=36.5805&lon=-114.4703&appid=eb878d3545a265149fff584d44daa2a0&units=imperial";
fetch(apiURL5)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);



  });