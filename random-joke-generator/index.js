const container = document.querySelector(".container")
const joke_button = document.querySelector(".getJoke")
const par = document.querySelector(".container p")
const url = "https://v2.jokeapi.dev/joke/Any?type=single&amount=2"
joke_button.addEventListener("click", ()=>{
    fetch(url)
    .then(res=>{
        if(res.ok)
        {
            return res.json()
        }
        else
        {
            throw new Error("API Request is failed")
        }
    })
    .then(data=>{
        par.classList.remove("dis")
        par.classList.remove("not_fade")
        par.classList.add("fade")
        par.innerHTML =  data["jokes"][0].joke
    })
    .catch(err=>{
        console.error(err)
    })
})
