let cityID = 5604473;
let appid = 'ec29ac4f0b51381575ece1b569c9e1d1';
const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${appid}&units=imperial`;
//console.log(apiURL);

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        if($dt_txt.includes == '18:00:00') {
        // loop through each of the forecast days
        thefive.forEach(x => {
        let d = new Date(x.dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        day++
        });
    };
});