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

    });

};

const checkBoxes = function () {
    const foodType = 'chicken';
    let url = 'https://api.edamam.com/search';
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

        url += '&diet='+$(this).val();
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