const emotionsList = {
  anger: 30,
  disgust: 1000,
  fear: 10,
  happiness: 20,
  neutral: 60,
  sadness: 0,
  surprise: 0,
};

const keywords = {
  anger: ["peanut", "cashew", "fruit", "kale", "berry", "apple", "green tea", "matcha", "crunchy", "egg", "whole-grain", "crunchy",],
  disgust: ["soup", "garlic", "honey", "ginger", "spicy", "rice", "banana", "yogurt", "herbal", "tea", "lemon", "orange", "citrus",],
  fear: ["dark-chocolate", "salmon", "berry", "pasta", "bread", "rice", "soup", "tea", "walnut",],
  happiness: ["chewy", "tangy", "spicy", "hot", "savory", "sweet", "baked", "fried", "stir-fried", "roasated", "grilled", "creamy",],
  neutral: ["american", "chinese", "french", "greek", "italian", "indian", "japanese", "korean", "mediterranean", "mexican", "thai",],
  sadness: ["cream", "cheese", "soup", "fish", "dessert", "bread", "pasta", "comfort", "bacon", "fried", "nuts", "pizza", "cheesy"],
  surprise: ["uni", "acai", "bonito", "fish-sauce", "cherry", "steak", "potato", "okra", "vodka", "bourbon", "anchovy", "espresso", "vinegar", "pickle-juice", "rose-petal", "molasses", "miso", "XO-sauce",],
};


let termList =[];
function findKeywords(emotionsList) {
  const originalList = Object.values(emotionsList);
  termList= [];

  console.log(emotionsList);

  const listVals = Object.values(emotionsList);
  const listKeys = Object.keys(emotionsList);

  const firstMax = Math.max(...listVals);
  const index1 = listVals.indexOf(firstMax);
  listVals.splice(index1, 1);

  const secondMax = Math.max(...listVals);
  const index2 = originalList.indexOf(secondMax);

  const firstKey = listKeys[index1];
  const secondKey = listKeys[index2];

  const firstTerm = keywords[firstKey][Math.floor((Math.random() * keywords[firstKey].length))];
  const secondTerm = keywords[secondKey][Math.floor((Math.random() * keywords[secondKey].length))];

  termList.push(firstTerm, secondTerm);

  const feelingsBox = $(".feelingsBox");
  feelingsBox.empty();
  feelingsBox.append(` ${firstMax}% ${firstKey} and ${secondMax}% ${secondKey}`);

  console.log(termList);
}