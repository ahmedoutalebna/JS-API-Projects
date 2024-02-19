const quote = document.querySelector(".quote")
const author = document.querySelector(".name")
const quote_button = document.querySelector(".get_quote")
const api = "https://api.quotable.io/random"
function getQuote()
{
    fetch(api)
    .then(request=>{
        return request.json()
    })
    .then(data=>{
        quote.textContent =  data.content;
        author.textContent = data.author
    })
    .catch(err =>{
        console.error(err)
    })
}
quote_button.addEventListener("click", getQuote)