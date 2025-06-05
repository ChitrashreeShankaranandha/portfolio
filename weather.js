const apiKey = '7c093fd6e8fee37b03df6173fcd1ec93';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  const result = document.getElementById('result');

  if (!city) {
    result.textContent = 'Please enter a city name.';
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => {
      if (!res.ok) {
        throw new Error('City not found');
      }
      return res.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const condition = data.weather[0].main;
      result.innerHTML = `🌍 ${data.name} <br> 🌡️ ${temp}°C <br> ☁️ ${condition}`;
    })
    .catch(err => {
      result.textContent = err.message;
    });
});
