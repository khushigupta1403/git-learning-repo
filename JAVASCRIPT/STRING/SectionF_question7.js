const fruits = "apple, banana, grape";
const fruitsArray = fruits.split(", ").map(fruit => fruit.trim());
console.log(fruitsArray);