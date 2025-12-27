const apiKey = "94cd4c7672c6a90adc4171494ed906fc";

function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "❌ Please enter a city";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "❌ City not found";
        return;
      }

      result.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
        <p>💨 Wind: ${data.wind.speed} km/h</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "⚠ Error fetching data";
    });
}
