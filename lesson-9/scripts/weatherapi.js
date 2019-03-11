let weatherRequest = new XMLHttpRequest();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
<body>
  <h1>OpenWeatherMap.org API Test</h1>
  <p>The current temperature in Preston, Idaho is <span id="current-temp"></span>&deg; F</p>
  <script src="js/weatherapi.js"></script>
</body>