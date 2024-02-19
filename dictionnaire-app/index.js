const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const book_name = document.querySelector(".name")
const phonetcs = document.querySelector(".phonetcs")
const definition = document.querySelector(".explication")
const audio_icon = document.querySelector(".book-name i")
const synonyme = document.querySelector(".synonyme")
const book = document.querySelector(".book")
source = document.querySelector(".source-video")
let dictionnary = ()=>{
    let name = document.querySelector(".book_input")
    if(name.value.trim != "")
    {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + name.value
        fetch(url)
        .then(response=>{
            if(response.ok)
            {
                return response.json()
            }
            else
            {
                throw new Error("API Request is failed")
            }
        })
        .then(data=>{
            //
            let searched_word = data[0].word
            let phonetic = data[0].phonetics[1].text
            let meaning = data[0].meanings[0].definitions[0].definition
            console.log(data[0].meanings[0])
            let audio_path = data[0].phonetics[0].audio
            book_name.textContent = searched_word
            phonetcs.textContent = phonetic
            definition.textContent = meaning

            source.setAttribute("src", audio_path)

            // console.log(data[0].phonetics)
 
            function playAudio()
            {
                source.play()
            }
            audio_icon.addEventListener("click", ()=>{
                // if(audio_path === '')
                // {
                //     audio_icon.disabled = true
                //     console.log(audio_path)
                //     alert("this word prounouciation is not availaible, please try another word")
                // }
                playAudio()
                source.removeAttribute("src")


            })
            // steps to follow 
            // so now create audio tag 
            // and then add the audio to the container 
            // and after that create source tag with type="audio/mp3"
            // finally trigger the function audio.play when the user 
            // click the button audio
            // then addEventListener to the icon must trigger the function
            // audio.play when the user click audio icon
            
            // console.log("the word searched for is: ", data[0])
        })
        .catch(()=>{
            book.innerHTML = '<h2>the book searched for is not found </h2>'
            book.classList.add("errorHandler")
        })
    }
    else
    {
        search.disabled = true
        alert("Please fill out the input before searching...")
    }
}

search.addEventListener("click", dictionnary)