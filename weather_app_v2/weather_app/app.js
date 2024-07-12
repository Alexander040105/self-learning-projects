const search = document.getElementById("search");
const countryName = document.getElementById("countryName");
const countryHeader = document.getElementById("country");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherType = document.getElementById("typeWeather");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const latLabel = document.getElementById("latLabel");
const lonLabel = document.getElementById("lonLabel");
const darkToggle = document.getElementById("darkMode");
const forecastTable = document.getElementById("forecastTable");
const forecastText1 = document.getElementById("forecastText1");
const forecastIcon1 = document.getElementById("forecastIcon1");

darkToggle.addEventListener("click", function darkMode(){
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    darkToggle.innerText = isDarkMode ? "light_mode" : "dark_mode";
});

async function defaultHomePage(){
    const apiKey = "67b4cb11470a49dd817142325241003";
    // let country = countryName.value.toLowerCase();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=philippines`);
    const data = await response.json();
    let currentData = data.current.condition.text;
    let lat = data.location.lat;
    let lon = data.location.lon;
    let icon = data.current.condition.icon;
    let temp = data.current.temp_c;

    countryHeader.innerText = "PHILIPPINES";
    weatherType.innerText = currentData ;
    temperature.innerText = temp + "°";
    latitude.innerText = lat;
    longitude.innerText = lon;
    latLabel.style.display = "block"
    weatherIcon.style.display = "block"
    lonLabel.style.display = "block"
    weatherIcon.src = icon;

    console.log(data)

    if(!response.ok){
        throw new Error('Could not fetch the data or resource');
    }
    countryName.value = "";
}

async function weatherApi(){
    const apiKey = "67b4cb11470a49dd817142325241003";
    let country = countryName.value.toLowerCase();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}`);
    const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}`);
    // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=philippines`);


    const data = await response.json();
    const dataForecast = await forecastResponse.json();
    let currentData = data.current.condition.text;
    let lat = data.location.lat;
    let lon = data.location.lon;
    let icon = data.current.condition.icon;
    let temp = data.current.temp_c;
    

    //para sa unang tr
    // let weatherForecastHourText1 = data.forecast.forecastday[0].hour[6].condition.text;
    // let weatherForecastHourText1 = data.forecast.forecastday[0].day.hour[0];
    // let weatherForecastHourIcon1 = data.forecast.forecastday[0].hour.map(hour => hour.condition.icon);
    // if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0]) {
    //     const weatherForecastHourText1 = data.forecast.forecastday[0].hour[6].condition.text;
    //     const weatherForecastHourIcon1 = data.forecast.forecastday[0].hour[6].condition.icon;
    //     forecastIcon1.src = weatherForecastHourIcon1;
    //     forecastText1.innerText = weatherForecastHourText1;
    // } else{
    //     console.log(Error);
    // }
    

    countryHeader.innerText = countryName.value.toUpperCase();
    weatherType.innerText = currentData ;
    temperature.innerText = temp + "°";
    latitude.innerText = lat;
    longitude.innerText = lon;
    latLabel.style.display = "block"
    weatherIcon.style.display = "block"
    lonLabel.style.display = "block"
    weatherIcon.src = icon;

    if(!response.ok){
        throw new Error('Could not fetch the data or resource');
    }
    countryName.value = "";
    console.log(data);
    console.log(dataForecast);
    console.log(currentData);
    console.log(countryName);


    // console.log(data);
}

defaultHomePage();
search.addEventListener("click", weatherApi);
// weatherApi();