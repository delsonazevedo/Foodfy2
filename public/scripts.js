const recipes = document.querySelectorAll('.recipes')
const hideIngredientes = document.querySelector(".hide-ingredients")
const hidePreparation = document.querySelector(".hide-preparation")
const hideInformation = document.querySelector(".hide-information")
const ingredients = document.querySelector('.recipe-ingredients')
const preparation = document.querySelector('.recipe-preparation')
const information = document.querySelector('.recipe-information')

let i = -1

for (let recipe of recipes) {
    i++
    recipe.classList.add('active')
    recipe.setAttribute("id", i)
    recipe.addEventListener("click", function () {
        const recipeId = recipe.getAttribute("id")
        window.location.href=(`/recipes/${recipeId}`)
    })
}

hideIngredientes.addEventListener("click", function(){
    if (ingredients.className == 'recipe-ingredients'){
        ingredients.classList.add('hidden')
        hideIngredientes.innerHTML = "MOSTRAR"
    }else{
        ingredients.classList.remove('hidden')
        hideIngredientes.innerHTML = "ESCONDER"
    }
})

hidePreparation.addEventListener("click", function(){
    if (preparation.className == 'recipe-preparation'){
        preparation.classList.add('hidden')
        hidePreparation.innerHTML = "MOSTRAR"
    }else{
        preparation.classList.remove('hidden')
        hidePreparation.innerHTML = "ESCONDER"
    }
})

hideInformation.addEventListener("click", function(){
    if (information.className == 'recipe-information'){
        information.classList.add('hidden')
        hideInformation.innerHTML = "MOSTRAR"
    }else{
        information.classList.remove('hidden')
        hideInformation.innerHTML = "ESCONDER"
    }
})

