const apikey = "&appid=f81422de2a9bdea72d6ccc35d23cdaa2";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + apikey);
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }else{
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".weather-name").innerHTML = data.weather[0].main
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
    if(data.weather[0].main =="Clouds"){
      weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
      weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
      weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
      weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
      weathericon.src = "images/mist.png";
    }  
}
}
searchbtn.addEventListener("click", ()=>{
  checkweather(searchbox.value);
})