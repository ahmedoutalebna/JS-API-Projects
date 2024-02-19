const container = document.querySelector(".container");
const get_fact = document.querySelector(".get_fact");
const get_random_fact = document.querySelector(".get_random_fact");
const pass_number = document.querySelector(".input_number");
const num = document.querySelector(".number");
const information = document.querySelector(".information");
const res = document.querySelector(".result");

function get_fact_function() {
    console.log(".....")
    let url = `http://numbersapi.com/${pass_number.value}`;
    fetch(url)
        .then(response => {
            return response.text();      
        })
        .then(data => {
            console.log(data);
            num.textContent = pass_number.value;
            information.textContent = data;
        
        })


    }


const get_random_fact_function = () => {
    let n = Math.floor(Math.random() * 300) + 1;
    let second_url = `http://numbersapi.com/${n}`;
    fetch(second_url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Invalid response from server");
            }
            return res.text();
        })
        .then(data => {
            num.textContent = n;
            information.textContent = data;
        })
        .catch(err => {
            console.error(err);
        });
};

get_fact.addEventListener("click", ()=>{
    if(pass_number.value.toString().trim().length != 0)
    {
        if(Number(pass_number.value) >= 0 )
        {
            get_fact_function()
        }
    }
    else
    {
        res.innerHTML = `<h2 class="empty">Please enter a valid input</h2>`
    }
});
get_random_fact.addEventListener("click", get_random_fact_function);
