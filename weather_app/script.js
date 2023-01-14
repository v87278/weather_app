const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b629e5c7bcmsh225573c31ddc9b9p154ac6jsn6fa8ac5ccaa4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = millisToHrMinSec(response.sunrise);
      sunset.innerHTML = millisToHrMinSec(response.sunset);
      feels_like.innerHTML = response.feels_like;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Mumbai");

const dropdownItems = document.querySelectorAll(
  ".dropdown-menu .dropdown-item"
);

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    getWeather(item.innerHTML);
  });
});

function millisToHrMinSec(millis) {
  var utcSeconds = millis;
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(utcSeconds);
  return (
    (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()) +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds() +
    " " +
    (d.getHours() > 12 ? "PM" : "AM")
  );
}
