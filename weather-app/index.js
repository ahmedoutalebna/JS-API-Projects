const container = document.querySelector(".search-box")
const input_city = document.querySelector(".city_name")
const search = document.querySelector(".search_button")
const icon = document.querySelector(".icon-image")
const city = document.querySelector(".name")
const main = document.querySelector(".main")
const description = document.querySelector(".description")
const temp = document.querySelector(".temp")
const min_temp = document.querySelector("#min-temp")
const max_temp = document.querySelector("#max-temp")

const informations = document.querySelector(".city-weather")

let api_key = "04e762e2b4382822d577f145081e3d95"
let url1 = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${api_key}`

async function fetchDefaultWeather()
{
    try
    {
        const response = await fetch(url1)
        if(!response.ok)
        {
            throw new Error("Networking erorr")
        }
        const data  = await response.json()
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.weather[0].icon)
        console.log(data.main.temp)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)

        city.textContent = data.name
        main.textContent = data.weather[0].main
        let iconCode = data.weather[0].icon
        let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
        icon.src = iconUrl
        // convert values from kelvin to celsius
        let celsius = data.main.temp - 273.15
        let min     = data.main.temp_min - 273.15
        let max     = data.main.temp_max - 273.15
        // rounded values to 2 value after comma
        temp.innerHTML = `${celsius.toFixed(2)}&#176;`
        min_temp.innerHTML = `${min.toFixed(2)}&#176;`
        max_temp.innerHTML = `${max.toFixed(2)}&#176;`
    }
    catch(err)
    {
        console.error(err)
    }
}

async function fetchWeather()
{
    let city = input_city.value 
    let url2 =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    try
    {
        const response = await fetch(url2)
        if(!response.ok)
        {
            informations.innerHTML = `<h1 class="error">CITY NOT FOUND</h1>`
        }
        const data = await response.json()
        let iconCode2 = data.weather[0].icon
        let iconUrl2 = `http://openweathermap.org/img/wn/${iconCode2}@2x.png`
        
        let temp_convert = data.main.temp - 273.5
        let temp_celsius = temp_convert.toFixed(2)
        let min_temp_convert = data.main.temp_min - 273.15 
        let min_convert = min_temp_convert.toFixed(2)
        let max_temp_convert = data.main.temp_max - 273.15 
        let max_convert = max_temp_convert.toFixed(2)
        informations.innerHTML = 
        `
        <p class="name">
            ${data.name}
        </p>
        <div class="status">
            <p class="main">
            ${data.weather[0].main}
            </p>
            <p class="description">
            ${data.weather[0].description} 
            </p>
        </div>
        <p class="icon">
            <img src="${iconUrl2}" class="icon-image">
        </p>
        <p class="temp">
            ${temp_celsius}&#176;
        </p>
        <div class="min-max">
            <p class="min"> <span class="center-min-max">min</span> <br> <span class="temper" id="min-temp">${min_convert}&#176;</span></p>
            <div class="bord">
            </div>
            <p class="max">
                <span class="center-min-max">max</span><br> <span id="max-temp" class="temper">${max_convert}&#176;</span>
            </p>
        </div>
        `
    }
    catch(err)
    {
        console.error(err)
    }
}
search.addEventListener("click", fetchWeather)



window.addEventListener("load", fetchDefaultWeather)
