$(document).ready(function (){

// figure out way to parse in data 



const getRecipe = function (url) {

    // // Need input from face++ to determine what food type to search for in Edamam
    // const foodType = 'all';
    // let url = 'https://api.edamam.com/search';
    // let recipeParam = {
    //     'q': foodType,
    //     // test using commas to delimit other searches or &q=
    //     'app_id': '3284ef04',
    //     'app_key': 'f092529967b25342d06a5afe00576fdd',
    //     // create a function that takes in exlcusion(s) to be added to the parameters above
    // }

    // url += '?' + $.param(
    // recipeParam
    // );

    $.ajax({
        url: url,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        let recipeList = response.hits;
        $('#recipeBox').empty();


        for (let i = 0; i<recipeList.length; i++) {

            let calories = Math.round(recipeList[i].recipe.calories);
            $('#recipeBox').append(`
            <div class="col-md-12 border  mt-3 ml-4 mr-4">
            <a href="${recipeList[i].recipe.url}" target=_blank>
                <div class="recipeEach">
                  <img class="float-left mr-2 mt-3 mb-3 border" src="${recipeList[i].recipe.image}" alt="food-pic" width="150px">
                  <h3 class="text-left pt-3"> ${recipeList[i].recipe.label}</h3>
                  <p class="text-left pt-1">Calories: ${calories}</p>
                  <p class="text-left pt-1">Number of Ingredients: ${recipeList[i].recipe.ingredients.length}</p>
                  </div></div>`) 
        };
        console.log(recipeList);


        



        $()

    });

};

const checkBoxes = function () {
    const firstTerm = keywords[firstKey][Math.floor((Math.random() * keywords[firstKey].length))];
    const secondTerm = keywords[secondKey][Math.floor((Math.random() * keywords[secondKey].length))];
  
    const foodType = `${firstTerm}, ${secondTerm}`;
    let url = 'https://api.edamam.com/search';
    $('.resultsRender').removeClass('hide');
    let recipeParam = {
        'q': foodType,
        // test using commas to delimit other searches or &q=
        'app_id': '3284ef04',
        'app_key': 'f092529967b25342d06a5afe00576fdd'
    }
    url += '?' + $.param(
        recipeParam
        );

    let allcheckBoxes = [];

    $('input:checked').each(function(){

        url += $(this).val();
        allcheckBoxes.push($(this).val());
    });

    console.log(url);
    console.log(allcheckBoxes);
    getRecipe(url);

};


// const checkBoxes = function () {

    
    // if ($('#balanced').prop('checked') === true) {
    //     recipeParam.diet = 'balanced';
    // }
    // else if ($('#balanced').prop('checked') === false) {
    //     delete getRecipe.diet

    // }
    // if ($('#highProtein').prop('checked') === true) {
    //     recipeParam.diet = 'high-protein';
    // } 
    // else if ($('#highProtein').prop('checked') === false) {
    //     recipeParam.
    // }
    // if ($('#highFiber').checked) {
    //     recipeParam.diet = 'high-fiber';
    // };
    // if ($('#lowFat').checked) {
    //     recipeParam.diet = 'low-fat';
    // };
    // if ($('#lowCarb').checked) {
    //     recipeParam.diet = 'low-carb';
    // };

// }

$("#recipeCallButton").on('click', checkBoxes)

});