// Get a reference to the HTML elements
// const suggestion1 = document.querySelector('.suggestions1');
const recipeList = document.getElementById('recipeList');

// Edamam API endpoint URL
const edamamUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese';

console.log('recipeList')

let recipes

let fetchAllData = async ()=>{
    let response = await fetch(edamamUrl)
    recipes = await response.json()
    // console.log(4503495)
    console.log(response, recipes)
    if(recipes.hits && recipes.hits.length > 0){
        recipes.hits.forEach(item=>{
            let hit = item.recipe
            console.log(item)
            const recipeHtml = `
                  <li>
                  <div class="result" ><a href="${hit.url} target="_blank">
                    <img class="result-img" src="${hit.image}" alt="${hit.label} photo"></a>
                  <div class="result-text">
                    <h2 class="result-name"><a href="${hit.url} target="_blank">${hit.label}</a></h2>
                    <div class="rec-serves">
                      <h class="r1">Serves</h>
                      <h class="result-serves">${hit.yield}</h>
                      <h>people</h>
                    </div>
                    <div class="rec-time">
                      <h class="r1">Prep time</h>
                      <h class="result-time">${hit.totalTime}</h>
                      <h>minutes</h>
                    </div>
                  </div>
                </div>
                </li>
            `;
            recipeList.innerHTML += recipeHtml;
        })
    }
}

fetchAllData()

// function loadDishTypesFromEdamamApi() {
//     const edamamUrl = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese';
    
//     fetch(edamamUrl)
//       .then(response => response.json())
//       .then(data => {
//         const dishTypes = new Set();
//         data.hits.forEach(hit => {
//           hit.recipe.dishType.forEach(type => {
//             dishTypes.add(type);
//           });
//         });
//         const dropdownElement = document.getElementById('dish-types');
//         dropdownElement.innerHTML = '<option value="" selected="selected">Select a tag</option>'; // clear previous options
//         dishTypes.forEach(type => {
//           const optionElement = document.createElement('option');
//           optionElement.value = type;
//           optionElement.text = type;
//           dropdownElement.appendChild(optionElement);
//         });
//       })
//       .catch(error => console.error(error));
//   }
  
//   window.onload = function() {
//     loadDishTypesFromEdamamApi();
//   };
  

//   function populateMealTypes() {
//     const mealTypesDropdown = document.getElementById('meal-types');
    
//     fetch(edamamUrl)
//       .then(response => response.json())
//       .then(data => {
//         const allMealTypes = data.hits.flatMap(hit => hit.recipe.mealType);
//         const uniqueMealTypes = [...new Set(allMealTypes)];
        
//         uniqueMealTypes.forEach(mealType => {
//           const option = document.createElement('option');
//           option.value = mealType;
//           option.text = mealType;
//           mealTypesDropdown.add(option);
//         });
//       });
//   }
  
//   populateMealTypes();

//   function populatePrepTime() {
//     const prepTimeDropdown = document.getElementById('prep-time');
  
//     for (let i = 0; i <= 300; i += 20) {
//       const option = document.createElement('option');
//       option.value = i;
//       option.text = `${i} min`;
//       prepTimeDropdown.add(option);
//     }
//   }
  
//   populatePrepTime();

//   const form = document.querySelector('#form1');
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const dishType = document.querySelector('#dish-types').value;
//     const maxPrepTime = document.querySelector('#prep-time').value;
//     const mealType = document.querySelector('#meal-types').value;

//     const edamamUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&q=${dishType}&time=${maxPrepTime}&mealType=${mealType}`;

//     const recipeList = document.getElementById('here');
//     recipeList.innerHTML = '';

//     let response = await fetch(edamamUrl);
//     let recipes = await response.json();

//     if (recipes.hits && recipes.hits.length > 0) {
//       recipes.hits.forEach(item => {
//         let hit = item.recipe;
//         const recipeHtml = `
//           <li>
//             <div class="result">
//               <a href="${hit.url}" target="_blank">
//                 <img class="result-img" src="${hit.image}" alt="${hit.label} photo">
//               </a>
//               <div class="result-text">
//                 <h2 class="result-name">
//                   <a href="${hit.url}" target="_blank">${hit.label}</a>
//                 </h2>
//                 <div class="rec-serves">
//                   <h class="r1">Serves</h>
//                   <h class="result-serves">${hit.yield}</h>
//                   <h>people</h>
//                 </div>
//                 <div class="rec-time">
//                   <h class="r1">Prep time</h>
//                   <h class="result-time">${hit.totalTime}</h>
//                   <h>minutes</h>
//                 </div>
//               </div>
//             </div>
//           </li>
//         `;
//         recipeList.innerHTML += recipeHtml;
//       });
//     }
//   });

  // function search(){
  //   //get the search term from the input field
  //   let searchKey = document.querySelector('#searchKey').value;
  
  //   let results = [];
  
  //   //iterate all the records in the global state
  //   for(let rec of state){
  
  //     //capitalize the search term and text to be case insensitive
  //     let searchText = rec.character.toUpperCase();
  //     searchKey = searchKey.toUpperCase();
  
  //     //add to resulting array if search term is in the text
  //     if ( searchText.search(searchKey) !== -1 ){
  //       results.push(rec);
  //     }
  
  //     const recipeHtml = `
  //     <li>
  //       <div class="result">
  //         <a href="${hit.url}" target="_blank">
  //           <img class="result-img" src="${hit.image}" alt="${hit.label} photo">
  //         </a>
  //         <div class="result-text">
  //           <h2 class="result-name">
  //             <a href="${hit.url}" target="_blank">${hit.label}</a>
  //           </h2>
  //           <div class="rec-serves">
  //             <h class="r1">Serves</h>
  //             <h class="result-serves">${hit.yield}</h>
  //             <h>people</h>
  //           </div>
  //           <div class="rec-time">
  //             <h class="r1">Prep time</h>
  //             <h class="result-time">${hit.totalTime}</h>
  //             <h>minutes</h>
  //           </div>
  //         </div>
  //       </div>
  //     </li>
  //   `;
  //   }
  // }
    
  






  function searchRecipes(keyword) {
    const appId = 'd46dc8ad'; 
    const appKey = 'b0cc7ea9fadf59f0f3d0a9bd29d329da'; 
    const baseUrl = 'https://api.edamam.com/search';
    const url = `${baseUrl}?q=${keyword}&app_id=${appId}&app_key=${appKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {

        recipeList.innerHTML = '';

    // let response = await fetch(edamamUrl);
    // let recipes = await response.json();

    if (recipes.hits && recipes.hits.length > 0) {
      recipes.hits.forEach(item => {
        let hit = item.recipe;
        const recipeHtml = `
          <li>
            <div class="result">
              <a href="${hit.url}" target="_blank">
                <img class="result-img" src="${hit.image}" alt="${hit.label} photo">
              </a>
              <div class="result-text">
                <h2 class="result-name">
                  <a href="${hit.url}" target="_blank">${hit.label}</a>
                </h2>
                <div class="rec-serves">
                  <h class="r1">Serves</h>
                  <h class="result-serves">${hit.yield}</h>
                  <h>people</h>
                </div>
                <div class="rec-time">
                  <h class="r1">Prep time</h>
                  <h class="result-time">${hit.totalTime}</h>
                  <h>minutes</h>
                </div>
              </div>
            </div>
          </li>
        `;
        recipeList.innerHTML += recipeHtml;
      });
    }
  })
}
  







  
//   let event = confirmBtn.addEventListener('click', filterRecipes);

//   function filterSearchResults(event) {
//     event.preventDefault();
  
//     const dishType = document.getElementById('dish-types').value || '';
//     const prepTime = document.getElementById('prep-time').value || '';
//     const mealType = document.getElementById('meal-types').value || '';
//     const searchKeyword = document.getElementById('search-bar').value || '';
  
//     const edamamUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da&cuisineType=Japanese&q=${
//       searchKeyword ? encodeURIComponent(searchKeyword) : ''
//     }&dishType=${dishType ? encodeURIComponent(dishType) : ''}&time=${prepTime}&mealType=${
//       mealType ? encodeURIComponent(mealType) : ''
//     }`;
  
//     function searchRecipes() {
//       fetch(edamamUrl)
//         .then(response => response.json())
//         .then(data => {
//           const searchResults = document.getElementById('search-results');
//           searchResults.innerHTML = '';
  
//           if (data.hits.length === 0) {
//             searchResults.innerHTML = 'No results found.';
//           } else {
//             data.hits.forEach(hit => {
//             const recipe = hit.recipe;
//             const resultLi = document.createElement('li');
//             resultLi.innerHTML = `
//               <div class="result">
//                 <a href="${hit.url}" target="_blank">
//                   <img class="result-img" src="${hit.image}" alt="${hit.label} photo">
//                 </a>
//                 <div class="result-text">
//                   <h2 class="result-name">
//                     <a href="${hit.url}" target="_blank">${hit.label}</a>
//                   </h2>
//                   <div class="rec-serves">
//                     <h class="r1">Serves</h>
//                     <h class="result-serves">${hit.yield}</h>
//                     <h>people</h>
//                   </div>
//                   <div class="rec-time">
//                     <h class="r1">Prep time</h>
//                     <h class="result-time">${hit.totalTime}</h>
//                     <h>minutes</h>
//                   </div>
//                 </div>
//               </div>
//             `;
  
//             searchResults.appendChild(resultLi);
//           });
//         }
//       })
//       .catch(error => console.error(error));
//   }
  
//   const searchForm = document.querySelector('#form1');
//   const confirmBtn = document.querySelector('input[type="submit"][value="confirm"]');
//   confirmBtn.addEventListener('click', filterRecipes);

  
//   searchForm.addEventListener('confirmBtn', function(event) {
//     if (event.target === confirmBtn) {
//       filterSearchResults(event);
//     }
//   });
  
// }

// function filterRecipes() {
//   const dishType = document.getElementById("dish-type").value;
//   const prepTime = document.getElementById("prep-time").value;
//   const mealType = document.getElementById("meal-type").value;

//   const apiUrl = `https://api.edamam.com/search?q=${dishType}&time=${prepTime}&mealType=${mealType}&app_id=d46dc8ad&app_key=b0cc7ea9fadf59f0f3d0a9bd29d329da`;

//   // Call the API and retrieve the recipes
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       // Use the retrieved data to display the recipes
//       console.log(data.hits);
//     })
//     .catch(error => console.log(error));
// }

// // Add event listener to the submit button
// const submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent form from submitting
//   filterRecipes();
// });
