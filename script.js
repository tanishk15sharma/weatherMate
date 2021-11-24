const inputLocation = document.querySelector("#inputlocation")
const clickBtn = document.querySelector("#click")
const locationOutput = document.querySelector("#locationoutput")
const outputTxt = document.querySelector("#output")


let weatherURL = "https://api.weatherapi.com/v1/current.json?key=5c8adc1c18114f98918163413212311&q=${name}"

//let weatherURL = "https://api.weatherapi.com/v1/current.json?key=5c8adc1c18114f98918163413212311&q=$%7Bname%7D%60"

clickBtn.addEventListener("click",weatherFetch)

function weatherFetch() {
    let name = inputLocation.value
    fetch(weatherURL + name )
    .then(response => response.json()   )
    .then(data => {  console.log(data) 
       //locationOutput.innerHTML =     data.current.condition.icon +   data.location.name + ", "  + data.location.region ;   <div id="place">
         let ans =  ` <h1 id="locationoutput">${data.location.name}  , ${data.location.region}    </h1>
            <h3 id="datetimeoutput"> ${data.location.localtime} </h3>
        </div>
        <div id="tempdiv">
            <h2>${data.current.temp_c  }°C</h2>
            <h3>${data.current.condition.text} </h3>
        </div>
        <br>
        <div id="speeddiv">
            <h3> Wind Speed: ${data.current.wind_kph  } Kph</h3>
            <h4> Humidity : ${data.current.humidity} </h4>
        </div>`
        outputTxt.innerHTML = ans;
        
    }
    )

}

