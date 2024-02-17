


const apiKey = "1a9e784b83ced95145af3a9ab61b758f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search i");
const weatherIcons=document.querySelector(".weather-icon");

async function checkWeather(City){
    const response = await fetch (apiUrl + City + `&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    // condition
    if(data.weather[0].main == "Clouds"){
        weatherIcons.src = "img/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcons.src = "img/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcons.src = "img/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcons.src = "img/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcons.src = "img/mist.png";
    }
    document.querySelector(".weather-main").style.display="block";
}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});