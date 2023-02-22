const form = document.querySelector('form');
const input = document.querySelector('input');


form.addEventListener('submit', e => {
  e.preventDefault();

  const location = input.value;
  const API_key = '2de43b9db2cf70da20e3cab61ee95792'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`)
    .then(response => response.json())
    .then(data => {
      // Display the weather data on the page
      temp_dat= data.main.temp-273.15
      let roundoff_temp_dat = Math.round(temp_dat);
      document.getElementById("Weather_data").innerText = `Weather Data of ${data.name} [${data.sys.country}]`
      document.getElementById("temp").innerText = `Temperature- ${roundoff_temp_dat}°C`;
      //description= data.weather.description;
      //document.getElementById("description").innerText = description
      document.getElementById("pressure").innerText = `Air pressure- ${data.main.pressure} mbar`
      document.getElementById("humidity").innerText = `Humidity- ${data.main.humidity} %`
      document.getElementById("wind_speed").innerText = `Wind speed- ${data.wind.speed} k/m`
    });
});