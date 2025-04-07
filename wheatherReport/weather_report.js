function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value;
      const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; 
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      
      //Fetching data from The server
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. please try again.<br>
        ${error}.</p>`;
      })
}

function showweatherlatlon (event){ 
    event.preventDefault();
    const lon = document.getElementById('Longitude').value;
    const lat = document.getElementById('Latitude').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    //fetching data from the server
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<>failed to fetch weather. please try again.<br>
        ${error}.</p>`
    })
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);
document.getElementById('weatherFormlonlat').addEventListener('submit',showweatherlatlon);