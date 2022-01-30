let lat;
let long;
const apiKey = '74a450b82ce39d2bf37dca659bc634d7';

function app() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log(lat,long);
                getInfoData();
            }
        )
    }
}

function getInfoData() {
    console.log('test');
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    console.log(url);

    fetch(url).then(function(data) {
        data.json().then(function(data) {
            console.log(data);
            console.log(data.main.temp);

            const times = new Date();
            document.getElementById('times').innerHTML = times.getHours() + ':'+ times.getMinutes() + ':' + times.getSeconds();

            const city = document.getElementById('city');
            city.innerHTML = data.name;

            document.getElementById('temperature').innerHTML = data.main.temp + ' C';
            document.getElementById('humidity').innerHTML = data.main.humidity;
            document.getElementById('pressure').innerHTML = data.main.pressure;
            document.getElementById('speed').innerHTML = data.wind.speed;
        });
    });
}
app();