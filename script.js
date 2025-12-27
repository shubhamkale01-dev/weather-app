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
      const weather = data.weather[0].main;

if (weather === "Clear") {
  document.body.style.background =
    "linear-gradient(135deg, #f7971e, #ffd200)";
} 
else if (weather === "Clouds") {
  document.body.style.background =
    "linear-gradient(135deg, #757f9a, #d7dde8)";
} 
else if (weather === "Rain") {
  document.body.style.background =
    "linear-gradient(135deg, #314755, #26a0da)";
} 
else {
  document.body.style.background =
    "linear-gradient(135deg, #1e3c72, #2a5298)";
}

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
function toggleMode() {
  document.body.classList.toggle("light");
}


