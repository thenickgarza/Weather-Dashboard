 // global variables
 var cityInputEl = document.querySelector('#citySearch');
 var cityFormEl = document.querySelector('#city-form');
 var button = document.querySelector('.btn');
 var nameEl = document.querySelector('#user-city');
 var windEl = document.querySelector('#wind');
 var tempEl = document.querySelector('#temp');
 var humidityEl = document.querySelector('#humidity');
 var uvIndexEl = document.querySelector('#uvIndex');
 var cityArr = "";
//  let searchHistory = JSON.parse(localStorage.getItem("city")) || [];
// console.log(searchHistory)
 // tells computer to run HTML & CSS 1st.
 $(document).ready(function () {
    //displays the current day & time using moment js
    $("#currentTime").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
 });
  
 var citySubmitHandler = function(event) {
    // prevent page from refreshing
     event.preventDefault();
    // get value from input element
     var userCity = cityInputEl.value.trim();
    if (userCity) {
        getCityWeather(userCity);
        displayLocalStorage()
        // clears the input
         cityInputEl.value = '';
     } else {
         // alerts the user to enter a city if they hit search and have not entered a city
         alert('Please enter a city!');
     }
 };

let searchHistory = JSON.parse(localStorage.getItem("city")) || [];
console.log(searchHistory)
 function displayLocalStorage () {
    var userCity = cityInputEl.value.trim();
    const cityArr = [];
    cityArr.push(userCity)
    // save the input of the users search to local storage
    localStorage.setItem("city", JSON.stringify(cityArr));
 };

 // More variables to access the elements in the DOM 
 let mTemp = document.querySelector('#mTemp');
 let mWind = document.querySelector('#mWind');
 let mHumid = document.querySelector('#mHumid');
 let tTemp = document.querySelector('#tTemp');
 let tWind = document.querySelector('#tWind');
 let tHumid = document.querySelector('#tHumid');
 let wTemp = document.querySelector('#wTemp');
 let wWind = document.querySelector('#wWind');
 let wHumid = document.querySelector('#wHumid');
 let thTemp = document.querySelector('#thTemp');
 let thWind = document.querySelector('#thWind');
 let thHumid = document.querySelector('#thHumid');
 let fTemp = document.querySelector('#fTemp');
 let fWind = document.querySelector('#fWind');
 let fHumdid = document.querySelector('#fHumid');
 let sTemp = document.querySelector('#sTemp');
 let sWind = document.querySelector('#sWind');
 let sHumid = document.querySelector('#sHumid');
 let suTemp = document.querySelector('#suTemp');
 let suWind = document.querySelector('#suWind');
 let suHumid = document.querySelector('#suHumid');

 var getCityWeather = function(city) {
     // format the OpenWeatherApi url
     var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5e5aeafab0a91097731db1eeb71889ff&units=imperial';
     // make a request to the url
     fetch(apiUrl)
     // gets the response and formats it to json
     .then(response => response.json())
     // get the json response the console logs the data. main of the object
    .then(data => {
        var cityName = data.name
        var temp = Math.round(data.main.temp)
        var wind = Math.round(data.wind.speed)
        var humidity = data.main.humidity
        console.log(data);
        // puts the data into the HTML 
        nameEl.innerHTML = " City: " + cityName 
        tempEl.innerHTML = " Tempature: " + temp + "°F"
        windEl.innerHTML = " Wind: " + wind + " MPH ";
        humidityEl.innerHTML = " Humidity: " + humidity + "%";
        // gets the latitude from the API above
        var latitude = data.coord.lat
        // gets the longitude from the API above
        var longitude = data.coord.lon

        // fetches thee 5 day weather forecast 
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=5e5aeafab0a91097731db1eeb71889ff&units=imperial")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // Monday Forecast
                mTemp.innerHTML = " Temp: " + Math.round(data.daily[0].temp.day) + " °F "
                mWind.innerHTML = " Wind: " + Math.round(data.daily[0].wind_speed) + " MPH "
                mHumid.innerHTML = " Humidity: " + data.daily[0].humidity + " % "
                // Tuesday Forecast
                tTemp.innerHTML = " Temp: " + Math.round(data.daily[1].temp.day) + " °F "
                tWind.innerHTML = " Wind: " + Math.round(data.daily[1].wind_speed) + " MPH "
                tHumid.innerHTML = " Humidity: " + data.daily[1].humidity + " % "
                // Wednesday Forecast
                wTemp.innerHTML = " Temp: " + Math.round(data.daily[2].temp.day) + " °F "
                wWind.innerHTML = " Wind: " + Math.round(data.daily[2].wind_speed) + " MPH "
                wHumid.innerHTML = " Humidity: " + data.daily[2].humidity + " % "
                // Thursday Forecast
                thTemp.innerHTML = " Temp: " + Math.round(data.daily[3].temp.day) + " °F "
                thWind.innerHTML = " Wind: " + Math.round(data.daily[3].wind_speed) + " MPH "
                thHumid.innerHTML = " Humidity: " + data.daily[3].humidity + " % "
                // Friday Forecast
                fTemp.innerHTML = " Temp: " + Math.round(data.daily[4].temp.day) + " °F "
                fWind.innerHTML = " Wind: " + Math.round(data.daily[4].wind_speed) + " MPH "
                fHumdid.innerHTML = " Humidity: " + data.daily[4].humidity + " % "
                // Saturday Forecast
                sTemp.innerHTML = " Temp: " + Math.round(data.daily[5].temp.day) + " °F "
                sWind.innerHTML = " Wind: " + Math.round(data.daily[5].wind_speed) + " MPH "
                sHumid.innerHTML = " Humidity: " + data.daily[5].humidity + " % "
                // Sunday Forecast
                suTemp.innerHTML = " Temp: " + Math.round(data.daily[6].temp.day) + " °F "
                suWind.innerHTML = " Wind: " + Math.round(data.daily[6].wind_speed) + " MPH "
                suHumid.innerHTML = " Humidity: " + data.daily[6]. humidity + " % "
});
        
    
        });
 };

 cityFormEl.addEventListener("submit", citySubmitHandler);