const testList ={
  happy: 30,
  sad: 1000,
  neutral: 10,
  angry:20,
  surprised: 60,
};

const keywords = {
  sad: [
  "ice cream",
  "cheeseburger",
  "tacos",
  "french fries",
   "pie"
  ],
  surprised:[
   "uni",
   "corn chowder",
   "nothing",
  ],
};

const originalList=Object.values(testList);

const listNums = Object.values(testList);
const listVals = Object.keys(testList);

const firstMax = Math.max(...listNums);
const index1 = listNums.indexOf(firstMax);
listNums.splice(index1, 1);

const secondMax = Math.max(...listNums);
const index2 = originalList.indexOf(secondMax);

const firstTerm = listVals[index1];
const secondTerm = listVals[index2];

console.log(keywords[firstTerm][Math.floor((Math.random() * keywords[firstTerm].length))]);
console.log(keywords[secondTerm][Math.floor((Math.random() * keywords[secondTerm].length))]);
