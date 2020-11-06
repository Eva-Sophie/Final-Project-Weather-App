    let now = new Date();

    let dateMonth = now.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let date = document.querySelector("#date");
    date.innerHTML = `${dateMonth} ${month}, ${year}`;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hour = now.getHours();
    if (hours < 10) {
    hours = `0${hours}`;}
    let minutes = now.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;}
    let time = document.querySelector("#time");
    time.innerHTML = `${day}, ${hour}:${minutes} PM`;

    function showTemperature(response) {
      console.log(response.data);
      document.querySelector("#city").innerHTML = response.data.name;
      document.querySelector("#temp-today").innerHTML = `${Math.round(response.data.main.temp)}°C`;
    }

    function search(event) {
      event.preventDefault();
      let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
      let city = document.querySelector("#city-input").value;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; axios.get(apiUrl).then(showTemperature);
    }
    
    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);