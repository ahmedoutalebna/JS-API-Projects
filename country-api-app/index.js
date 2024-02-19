const output = document.querySelector(".output")
const flag = document.querySelector(".flag")
const capital = document.querySelector(".capital")
const continent = document.querySelector(".continent")
const population = document.querySelector(".population")
const currency = document.querySelector(".currency")
const language = document.querySelector(".language")
const search_button = document.getElementById("searching")
const state = document.querySelector(".name")
let search_input = document.querySelector(".country")
function countryApi()
{
    fetch(`https://restcountries.com/v3.1/name/${search_input.value}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        const cr_key = Object.keys(data[0].currencies)
        const cr_lang = Object.keys(data[0].languages)
        let lg = ''
        let output_lg = ''
        for(let i = 0; i < cr_lang.length; i++)
        {
            lg = cr_lang[i]
            if(i === cr_lang.length -1)
            {
                output_lg += data[0].languages[lg] 
            }
            else
            {
                output_lg += data[0].languages[lg] + ", "
            }

        }
        console.log(output_lg)
        output.innerHTML = `<div class="image-container">
            <img src="${data[0].flags.svg}" class="flag" />
        </div>
        <div class="name">${data[0].name.common}</div>
        <div class="informations">
            <p>Capital : <span class="capital">${data[0].capital[0]}</span></p>
            <p>Continent : <span class="continent">${data[0].continents[0]}</span></p>
            <p> Population :  <span class="population">${data[0].population}</span></p>
            <p>Currency : <span class="currency">${data[0].currencies[cr_key].name}-${data[0].currencies[cr_key].symbol}</span></p>
            <p>Language : <span class="language">${output_lg}</span></p></div>`
    })
    .catch(err =>{
        if(search_input.value.trim.length === 0)
        {
            output.innerHTML = `<h2 class="empty"> Please fill out the input </h2>`
        }
        else
        {
            output.innerHTML = `<h2 class="not_availaible">The name searched for is not a name of country.</h2>`
        }
    })
}
search_button.addEventListener("click", countryApi)