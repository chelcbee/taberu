// Get the recipe URI from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const recipeUri = urlParams.get('recipe');

console.log(`Recipe URI:${recipeUri}`);

// Get a reference to the HTML elements
const recipeName = document.querySelector('.recipe-name');
const recipePhoto = document.querySelector('.recipe-photo');
const authorName = document.querySelector('.author');
const servingsNum = document.querySelector('.servings');
const timeTaken = document.querySelector('.prep-time');
const ingredientsList = document.querySelector('.ingredients-list');
const instructionsList = document.querySelector('.steps');

// Edamam API endpoint URL for recipe information
const edamamRecipeUrl = `https://api.edamam.com/api/recipes/v2/${recipeUri}?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da`;

fetch(edamamRecipeUrl)
.then(response => response.json())
.then(data => {
// Display the recipe information
const recipe = data.recipe;

    recipeName.innerHTML = recipe.label;
    recipePhoto.src = recipe.image;
    authorName.innerHTML = recipe.source;
    servingsNum.innerHTML = recipe.yield;
    timeTaken.innerHTML = recipe.totalTime;

    recipe.ingredients.forEach(ingredient => {
    const ingredientHtml = `
        <li class="ingredient">${ingredient.text}</li>
    `;
    ingredientsList.innerHTML += ingredientHtml;
    });

    recipe.ingredientLines.forEach(step => {
    const stepHtml = `
        <li class="step">
        <h1 class="step-no">${recipe.ingredientLines.indexOf(step) + 1}</h1>
        <p class="step-info">${step}</p>
        </li>
    `;
        instructionsList.innerHTML += stepHtml;
    });

    })
    .catch(error => console.error(error));
