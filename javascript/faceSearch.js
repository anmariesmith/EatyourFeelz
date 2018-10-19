//Loading Icon
$(document).ajaxStart(function(){
  $("#wait").css("display", "block");
});
$(document).ajaxComplete(function(){
  $("#wait").css("display", "none");
});

$("#sendButton").on("click", faceSearch);
function faceSearch() {
  const imgFace = $("img").attr("src");
  const params = $.param({
    api_key: "N3sOeWTzk29SURxQ_RyMdZQhpMoRUkcD",
    api_secret: "0yrVLglQ7H188EHElOXr7S_-PXSoNNbm",
    return_attributes: "emotion,gender"
  });

  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const url = `${corsAnywhere}https://api-us.faceplusplus.com/facepp/v3/detect?${params}`;

  //Sends the photo to Face++ in base64 form: the string is too long, so it has to be converted to data form.
  $.ajax({
    url: url,
    method: "POST",
    data: {
      image_base64: imgFace
    } 
  }).then(function(response) {
    const emotionsList = response.faces[0].attributes.emotion;
    findKeywords(emotionsList);
  });
}
