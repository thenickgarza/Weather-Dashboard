 // global variables
 var cityInputEl = document.querySelector('#citySearch');
 var cityFormEl = document.querySelector('#city-form');
 var button = document.querySelector('.btn');
 var nameEl = document.querySelector('#user-city');
 var windEl = document.querySelector('#wind');
 var tempEl = document.querySelector('#temp');
 var humidityEl = document.querySelector('#humidity');
 var uvIndexEl = document.querySelector('#uvIndex');
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

         // clear old content 
         cityInputEl.value = '';
     } else {
         alert('Please enter a city!');
     }
 };

 var getCityWeather = function(city) {
     // format the OpenWeatherApi url
     var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5e5aeafab0a91097731db1eeb71889ff&units=standard';
     // make a request to the url
     fetch(apiUrl)
     // gets the response and formats it to json
     .then(response => response.json())
     // get the json response the console logs the data. main of the object
    //  .then(data => console.log(data))
    .then(data => {
        var cityName = data.name
        var wind = data.wind.speed
        var humidity = data.main.humidity
        console.log(data);
        // puts the data into the HTML 
        nameEl.innerHTML = " City: " + cityName 
        windEl.innerHTML = " Wind: " + wind + " MPH ";
        humidityEl.innerHTML = " Humidity: " + humidity + "%";
        
        
    })
 };

 cityFormEl.addEventListener("submit", citySubmitHandler);