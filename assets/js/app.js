(() => {
  const clock = document.getElementById('clock');
  const date = document.getElementById('date');
  const year = document.getElementById('year');

  function tick() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], { hour12: false });
    date.textContent = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
    year.textContent = now.getFullYear();
  }

  tick();
  setInterval(tick, 1000);

  // Demo values keep the dashboard useful before a weather provider is configured.
  // Replace these with the platform weather service when the backend is connected.
  const weather = { temp: '21°', state: 'Clear / local demo', humidity: '48%', wind: '12 km/h' };
  document.getElementById('weather-temp').textContent = weather.temp;
  document.getElementById('weather-state').textContent = weather.state;
  document.getElementById('weather-humidity').textContent = weather.humidity;
  document.getElementById('weather-wind').textContent = weather.wind;

  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.main-nav a').forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
})();
