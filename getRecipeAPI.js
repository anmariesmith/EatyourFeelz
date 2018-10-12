$(document).ready(function (){


const getAllStock = function () {

    // Need input from face++ to determine what food type to search for in Edamam
    const foodType = 'salmon,kale';
    let url = 'https://api.edamam.com/search';

    url += '?' + $.param({
        'q': foodType,
        'app_id': '3284ef04',
        'app_key': 'f092529967b25342d06a5afe00576fdd'

    });

    $.ajax({
        url: url,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        console.log(url);


    });

};


getAllStock();

});