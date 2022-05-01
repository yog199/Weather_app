let weather={
    

    fetchWeather(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city+
        "&units=metric&appid=f96ba51d0368fbf652e2e277587233b0"
        )
        .then((Response) => Response.json())
        .then((data) =>this.displayWeather(data));
    },
     displayWeather(data){
       let {name}=data;
       let{icon,description}=data.weather[0];
       let{temp,humidity}=data.main;
       let{speed}=data.wind;
       document.getElementById("city").innerText=name;
       document.getElementById("description").innerText=description;
       document.getElementById("temp").innerText=temp+"°C";
       document.getElementById("icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
       document.getElementById("humidity").innerText="Humidity:"+ humidity +"%";
       document.getElementById("wind").innerText="Wind Speed:"+speed+"km/hr";
       document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
     search(){
    this.fetchWeather(document.getElementById("searchB").value);}
};

function searchbtn(){
    document.getElementsByClassName("searct-btn");
    weather.search();
}

document.getElementById("searchB").addEventListener("keyup",function(event){
 if(event.key=="Enter"){
     weather.search();
 }
})

// weather.fetchWeather("bikaner");


function getLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition((success)=>{

    let {latitude,longitude}=success.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&units=metric&appid=f96ba51d0368fbf652e2e277587233b0`)
    .then((Response) => Response.json())
    .then((data) =>weather.displayWeather(data));
    
    })
}

getLocation();


