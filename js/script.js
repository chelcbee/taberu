// Get a reference to the HTML elements
const suggestion1 = document.querySelector('.suggestions1');
const recipeList = suggestion1.querySelector('ul');

// Edamam API endpoint URL
const edamamUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese&dishType=Soup';

// Fetch recipes from Edamam API
fetch(edamamUrl)
  .then(response => response.json())
  .then(data => {
    // Loop through the recipes and add them to the HTML list
    data.hits.forEach(hit => {
      const recipe = hit.recipe;
      const recipeHtml = `
        <li class="rec">
            <a href="${recipe.url}" target="_blank">
                <img class="food-pic" src="${recipe.image}">
                <h3 class="recipe-name">${recipe.label}</h3>
            </a>
            <svg class="heart" fill="none"  width="800px" height="800px" viewBox="0 0 24 24" stroke="#E69125">
                <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </li>
      `;
      recipeList.innerHTML += recipeHtml;
    });
  })
  .catch(error => console.error(error));

  // Get a reference to the HTML elements
const suggestion2 = document.querySelector('.suggestions2');
const recipeList1 = suggestion2.querySelector('ul');

// Edamam API endpoint URL
const edamamUrl2 = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese&dishType=Desserts';

// Fetch recipes from Edamam API
fetch(edamamUrl2)
  .then(response => response.json())
  .then(data => {
    // Loop through the recipes and add them to the HTML list
    data.hits.forEach(hit => {
      const recipe1 = hit.recipe;
      const recipeHtml1 = `
        <li class="rec">
            <a href="${recipe1.url}" target="_blank">
                <img class="food-pic" src="${recipe1.image}">
                <h3 class="recipe-name">${recipe1.label}</h3>
            </a>
            <svg class="heart" fill="none"  width="800px" height="800px" viewBox="0 0 24 24" stroke="#E69125">
                <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </li>
      `;
      recipeList1.innerHTML += recipeHtml1;
    });
  })
  .catch(error => console.error(error));




const rotwImg = document.querySelector('.rotw-img');
const rotwName = document.querySelector('.rotw-name');
const rotwURL = document.querySelector('.rotw-url');

const API_ENDPOINT = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese&random=true';

async function getRecipeOfTheWeek() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    const recipe = data.hits[0].recipe;

    rotwImg.src = recipe.image;
    rotwName.textContent = recipe.label;
    rotwURL.href = recipe.url;

  } catch (error) {
    console.log(error);
  }
}

getRecipeOfTheWeek();

setInterval(() => {
  getRecipeOfTheWeek();
}, 7 * 24 * 60 * 60 * 1000); 

function addToFavorites(recipeName) {
  // Change the heart SVG color to black
  const heart = document.getElementsByClassName('heart');
  heart.style.fill = 'black';

  // Add the recipe to favorites page
  const favoritesLink = document.createElement('a');
  favoritesLink.href = 'favourites.html#' + recipeName;
  favoritesLink.textContent = 'View ' + recipeName + ' recipe';
  document.getElementById('favorites-list').appendChild(favoritesLink);
}
