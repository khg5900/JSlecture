// const myCity = document.querySelector(".my-city");
// const myWeather = document.querySelector(".my-weather");

// const API_KEY = "022c44fda65f777ac64bc741ad25b005";

// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

//   fetch(url)
//     .then((Response) => Response.json())
//     .then((data) => {
//       console.log(data);
//       myCity.innerText = data.name;
//       myWeather.innerText = data.weather[0].main;
//     });
// }
// function onGeoError() {
//   alert();
// }
// navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

const myCity = document.querySelector(".my-city");
const myWeather = document.querySelector(".my-weather");

const API_KEY = "022c44fda65f777ac64bc741ad25b005";
// https://openweathermap.org/current

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      myCity.innerText = data.name;
      myWeather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert();
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
