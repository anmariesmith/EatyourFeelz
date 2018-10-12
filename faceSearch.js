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

  $.ajax({
    url: url,
    method: "POST",
    data: {
      image_base64: imgFace
    } 
  }).then(function(response) {
    console.log(response.faces[0].attributes);
  });
}
