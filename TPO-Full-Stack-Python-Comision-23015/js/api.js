
var apiKey = 'a6047755aa1b7766a7231d2a88b4c7c1';


const ciudades = ["Buenos%20Aires", "London", "Paris", "Sao%20Paulo", "Madrid"];

for (let ciudad = 0; ciudad < ciudades.length; ciudad++) {

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudades[ciudad] + "&appid=" + apiKey;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var temperatura = data.main.temp - 273.15;
            var temperaturaRedond = temperatura.toFixed(2);
            var icon = data.weather[0].icon;
            var name = data.name;

            var temp_nombre = "temperatura_" + name;
            var icon_nombre = "icon_" + name;

            document.getElementById(temp_nombre).textContent = temperaturaRedond + '°C';
            document.getElementById(icon_nombre).innerHTML = `<img src="https://openweathermap.org/img/w/${icon}.png" alt="Icono del clima">`;

        })
        .catch(error => {
            console.error('Error:', error);
        });
}