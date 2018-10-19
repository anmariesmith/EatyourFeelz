$(document).ready(function () {

    const getRecipe = function (url) {

        $.ajax({
            url: url,
            method: 'GET'
        }).then(function (response) {

            let recipeList = response.hits;
            $('#recipeBox').empty();
            if (recipeList.length === 0) {
                $('#alertModal').modal('show');
            }
            else {
                for (let i = 0; i < 9; i++) {
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
            }
        });
    };

    const checkBoxes = function () {
        let firstTerm = keywords[firstKey][Math.floor((Math.random() * keywords[firstKey].length))];
        let secondTerm = keywords[secondKey][Math.floor((Math.random() * keywords[secondKey].length))];
        let proteinPref = $('#proteinList').val();

        let foodType = '';
        if (proteinPref !== '') {
            foodType = `${firstTerm}, ${secondTerm}, ${proteinPref}`;
        }
        else {
            foodType = `${firstTerm}, ${secondTerm}`;
        };

        let url = 'https://api.edamam.com/search';

        let recipeParam = {
            'q': foodType,
            'app_id': '3284ef04',
            'app_key': 'f092529967b25342d06a5afe00576fdd',
            'from': '0',
            'to': '5000'
        }
        url += '?' + $.param(
            recipeParam
        );

        let allcheckBoxes = [];

        $('input:checked').each(function () {

            url += $(this).val();
            allcheckBoxes.push($(this).val());
        });

        getRecipe(url);

    };

//ADDITIONAL OPTIONS IN THE CHECKBOX FUNCTION:
//If the Edamam API resolves its technical issues, we can start running them.

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

    $(document).ajaxStart(function () {
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function () {
        $("#wait").css("display", "none");
    });
    $("#recipeCallButton").on('click', checkBoxes)

});