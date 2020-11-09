    let now = new Date();

    let dateMonth = now.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let date = document.querySelector("#date");
    date.innerHTML = `${dateMonth} ${month}, ${year}`;

    function formatDate (timestamp){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hour = now.getHours();
    if (hour < 10) {
    hour = `0${hours}`;}
    let minutes = now.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`};
    let lastUpdated = document.querySelector("#day");
    return `${day}, ${hour}:${minutes} PM`;
    }

    function showWeather(response) {
      console.log(response.data);
      document.querySelector("#city").innerHTML = response.data.name;
      document.querySelector("#temp-today").innerHTML = `${Math.round(response.data.main.temp)}°C`;
      document.querySelector("#weather-description").innerHTML = response.data.weather[0].description;      
      document.querySelector("#humidity").innerHTML = `Humidity: ${response.data.main.humidity} %`;
      document.querySelector("#wind").innerHTML = `Windspeed: ${Math.round(response.data.wind.speed)} km/h`;
      document.querySelector("#day").innerHTML = formatDate(response.data.dt * 1000);
      document.querySelector("#icon").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
      document.querySelector("#icon").setAttribute("alt", response.data.weather[0].description);
}

    function searchCity(city) {
      let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
      axios.get(apiUrl).then(showWeather);
    }
    
    function submitCity(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
    }

    function searchLocation(position) {
    let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
   }

   function getCurrentLocation(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(searchLocation);
   }
  
   let searchForm = document.querySelector("#search-form");
   searchForm.addEventListener("submit", submitCity);

   let currentLocationButton = document.querySelector("#current-location");
   currentLocationButton.addEventListener("click", getCurrentLocation);