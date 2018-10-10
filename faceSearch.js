const params = $.param({
	api_key: "N3sOeWTzk29SURxQ_RyMdZQhpMoRUkcD",
	api_secret: "0yrVLglQ7H188EHElOXr7S_-PXSoNNbm",
	image_url: "https://vignette.wikia.nocookie.net/shingekinokyojin/images/f/fa/Tobey_Maguire_Creepy_Smile_Meme.png/revision/latest?cb=20160411132025",
	return_attributes: "emotion,gender"
  });
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const url = `${corsAnywhere}https://api-us.faceplusplus.com/facepp/v3/detect?${params}`;
  
  $.ajax({
	url: url,
	method: "POST"
  }).then(function(response){
	console.log(response);
  });