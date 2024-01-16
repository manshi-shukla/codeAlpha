// Sample data for initial display
const recipes = [
    { name: "Pasta Carbonara", ingredients: "Spaghetti, eggs, bacon, Parmesan cheese", instructions: "1. Cook pasta. 2. Cook bacon. 3. Mix eggs and cheese. 4. Combine all ingredients." },
    { name: "Chocolate Cake", ingredients: "Flour, sugar, cocoa powder, eggs, milk", instructions: "1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake in the oven." }
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// Function to save a new or edited recipe
function saveRecipe() {
    const nameInput = document.getElementById("recipe-name");
    const ingredientsInput = document.getElementById("ingredients");
    const instructionsInput = document.getElementById("instructions");

    const recipe = {
        name: nameInput.value,
        ingredients: ingredientsInput.value,
        instructions: instructionsInput.value
    };

    recipes.push(recipe);
    displayRecipes();
    clearForm();
}

// Function to edit a recipe
function editRecipe(index) {
    const recipe = recipes[index];

    const nameInput = document.getElementById("recipe-name");
    const ingredientsInput = document.getElementById("ingredients");
    const instructionsInput = document.getElementById("instructions");

    nameInput.value = recipe.name;
    ingredientsInput.value = recipe.ingredients;
    instructionsInput.value = recipe.instructions;

    // Remove the edited recipe from the array
    recipes.splice(index, 1);

    displayRecipes();
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Function to clear the form after saving or editing a recipe
function clearForm() {
    document.getElementById("recipe-form").reset();
}

// Initial display of recipes
displayRecipes();