const content = document.querySelector(".content")
const image = document.querySelector(".content img")
const description = document.querySelector(".content p")
const get = document.querySelector(".content button")



get.addEventListener("click", fetchingMemes)

async function fetchingMemes()
{
    let url = "https://meme-api.com/gimme/wholesomememes"
    try
    {
        const response = await fetch(url)   
        const data = await response.json()
        image.src = data.url 
        description.textContent = data.title
    }
    catch(err)
    {
        console.error(err)
    }
}



