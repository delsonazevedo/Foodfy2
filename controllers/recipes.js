const fs = require('fs')
const data = require("../data.json")

exports.index = function (req, res) {
    let id = -1
    const recipes = []
    for (recipe of data.recipes) {
        id++
        recipe = {
            id: id,
            ...recipe,
        }
        recipes.push(recipe)
    }
    return res.render("admin/index", { recipes: recipes })
}

exports.show = function (req, res) {
    let id = -1
    const recipes = []
    for (recipe of data.recipes) {
        id++
        recipe = {
            id: id,
            ...recipe,
        }
        recipes.push(recipe)
    }
    const recipeIndex = req.params.id
    const selectedRecipe = recipes[recipeIndex]
    return res.render("admin/show", { recipe: selectedRecipe })
}

exports.create = function (req, res) {
    return res.render("admin/create")
}

exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    let { image, title, author, ingredients, preparation, information } = req.body


    data.recipes.push({
        image,
        title,
        author,
        ingredients,
        preparation,
        information,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Whire file error!")
        return res.redirect("/admin/recipes")
    })
    
}

exports.edit = function (req, res) {
    let id = -1
    const recipes = []
    for (recipe of data.recipes) {
        id++
        recipe = {
            id: id,
            ...recipe,
        }
        recipes.push(recipe)
    }
    const recipeIndex  = req.params.id
    const foundRecipe = recipes.find(function (recipe) {
        return recipe.id == recipeIndex
    })

    if (!foundRecipe) return res.send("Recipe not found!")

    const selectedRecipe = {
        ...foundRecipe,
    }
    return res.render('admin/edit', { selectedRecipe })
}

exports.put = function (req, res) {
    
    let id = -1
    const recipes = []
    for (recipe of data.recipes) {
        id++
        recipe = {
            id: id,
            ...recipe,
        }
        recipes.push(recipe)
    }

    
    const recipeIndex  = req.body.id
    const foundRecipe = recipes.find(function (recipe) {
            return recipe.id == recipeIndex
    })
    
    if (!foundRecipe) return res.send("Recipe not found!")
    
    let {image, title, author, ingredients, preparation, information} = req.body

    const editedRecipe = {
        image,
        title,
        author,
        ingredients,
        preparation,
        information,
    }
    
    data.recipes[recipeIndex] = editedRecipe
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write error!")
        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function (req, res) {
    let id = -1
    const recipes = []
    for (recipe of data.recipes) {
        id++
        recipe = {
            id: id,
            ...recipe,
        }
        recipes.push(recipe)
    }

    const recipeIndex = req.body.id

    let filteredRecipes = recipes.filter(function (recipe) {
        return recipe.id != recipeIndex
    })

    let finalRecipes = []

    for (recipe of filteredRecipes) {
        let {image, title, author, ingredients, preparation, information} = recipe

        recipe = {
            image,
            title,
            author,
            ingredients,
            preparation,
            information,
        }
        finalRecipes.push(recipe)
    }

    data.recipes = finalRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/admin/recipes")
    })
    
}