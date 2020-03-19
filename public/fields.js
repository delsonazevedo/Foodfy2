function addIngredient() {
    const ingredientsDiv = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
    
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredientsDiv.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addPreparation() {
    const preparationsDiv = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation");
    
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
    
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparationsDiv.appendChild(newField);
}

document.querySelector(".add-preparation").addEventListener("click", addPreparation);

const formDelete = document.querySelector("#form-delete")

formDelete.addEventListener("submit", function (event) {
    const confirmation = confirm("Deseja Deletar?")
    if (!confirmation) {
        event.preventDefault()
    }
})