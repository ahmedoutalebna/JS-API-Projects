const container = document.querySelector(".container")
const recipes_container = document.querySelector(".recipes-informations")
const recipe_search = document.querySelector(".search_button")
const search_box = document.querySelector(".search-box")
const input_value = document.querySelector(".search-box input")
const recipe_informations = document.querySelector(".recipe-informations")
const last_div = document.querySelector(".last-button")
const recipe_view_button = document.querySelector(".recipe_view")
const meal_inst = document.querySelector(".meal-instructions")
const text_instructions = document.querySelector(".text")
const closing_window = document.querySelector(".close")
const sub_container = document.querySelector(".sub-container")
const instructions = document.querySelector(".instruction")

const closing = ()=>{
    instructions.classList.add("hidden")
    sub_container.classList.remove("hidden")
}



const fetch_recipe = ()=>{

    let url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${input_value.value}`
    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data =>{
        recipe_informations.classList.add("recipe-informations")
        last_div.classList.remove("hidden")
        recipe_informations.innerHTML = `
            <div class="recipe-informations">
                <div class="recipe-image">
                    <img src="${data.meals[0].strMealThumb}" alt="">
                </div>
                <div class="yellow-recipe-part">
                    <p class="recipe-name"> ${data.meals[0].strMeal} </p>
                    <p class="recipe-country"> ${data.meals[0].strArea} </p>
                </div>
                <div class="recipe-ingredients">
                    <div class="first-column">
                        <li>${data.meals[0].strIngredient1}</li>
                        <li>${data.meals[0].strIngredient2}</li>
                        <li>${data.meals[0].strIngredient3}</li>
                        <li>${data.meals[0].strIngredient4}</li>
                        <li>${data.meals[0].strIngredient5}</li>
                        <li>${data.meals[0].strIngredient6}</li>
                        <li>${data.meals[0].strIngredient7}</li>
                    </div>
                    <div class="second-column">
                        <li>${data.meals[0].strMeasure1}</li>
                        <li>${data.meals[0].strMeasure2}</li>
                        <li>${data.meals[0].strMeasure3}</li>
                        <li>${data.meals[0].strMeasure4}</li>
                        <li>${data.meals[0].strMeasure5}</li>
                        <li>${data.meals[0].strMeasure6}</li>
                        <li>${data.meals[0].strMeasure7}</li>
                    </div>
                </div>
            </div>`
        recipe_view_button.addEventListener("click", ()=>{
            console.log(".....")
            sub_container.classList.add("hidden")
            instructions.classList.remove("hidden")
            text_instructions.textContent = data.meals[0].strInstructions

        })
        closing_window.addEventListener("click", closing)
    })

    .catch(err =>{
        if(input_value.value.trim().length === 0)
        {
            recipe_informations.classList.add("hidden")
            last_div.classList.add("hidden")
            meal_inst.innerHTML = `<h2 class="empty">the input cannot be empty</h2>`
        }
        else
        {
            recipe_informations.classList.add("hidden")
            last_div.classList.add("hidden")
            meal_inst.innerHTML = `<h2 class="empty">Please enter a valid input</h2>`
        }
    })

}

recipe_search.addEventListener("click", fetch_recipe)

