//Arrays of ingredients and food keywords that correlate to various emotions.
//Sourced by research into the neurochemistry of emotion and nutrition.
const keywords = {
  anger: ["peanut", "cashew", "fruit", "green", "berry", "apple", "green tea", "matcha", "crunchy", "egg", "whole-grain", "crunchy",],
  disgust: ["soup", "garlic", "honey", "ginger", "spicy", "rice", "banana", "yogurt", "herbal", "tea", "lemon", "orange", "citrus",],
  fear: ["dark-chocolate", "salmon", "berry", "pasta", "bread", "rice", "soup", "tea", "walnut",],
  happiness: ["american", "chinese", "french", "greek", "italian", "indian", "japanese", "korean", "mediterranean", "mexican", "thai",],
  neutral: ["chewy", "tangy", "spicy", "hot", "savory", "sweet", "baked", "fried", "stir-fried", "roasted", "grilled", "creamy",],
  sadness: ["cream", "cheese", "soup", "fish", "dessert", "bread", "pasta", "comfort", "bacon", "fried", "nuts", "pizza", "cheesy"],
  surprise: ["lamb", "bean", "noodle", "bonito", "fish-sauce", "cherry", "steak", "potato", "okra", "vodka", "bourbon", "anchovy", "espresso", "vinegar", "pickle-juice", "rose-petal", "molasses", "miso",],
};

let firstKey = "";
let secondKey = "";


function findKeywords(emotionsList) {
  const originalList = Object.values(emotionsList);
  firstKey= "";
  secondKey=""

  //Breaks the emotions object returned by Face++ into two arrays.
  const listVals = Object.values(emotionsList);
  const listKeys = Object.keys(emotionsList);

  //Finds the max value, stores it, splices it out, and repeats for the second highest value.
  const firstMax = Math.max(...listVals);
  const index1 = listVals.indexOf(firstMax);
  listVals.splice(index1, 1);

  const secondMax = Math.max(...listVals);
  const index2 = originalList.indexOf(secondMax);

  //Finds the keys based on the index of the two highest values when compared to teh original string.
  firstKey = listKeys[index1];
  secondKey = listKeys[index2];

  //Posts the feelings and passes them to getRecipeAPI.js.
  const feelingsBox = $(".feelingsBox");
  feelingsBox.empty();
  feelingsBox.append(` ${firstMax}% ${firstKey} and ${secondMax}% ${secondKey}`);
};