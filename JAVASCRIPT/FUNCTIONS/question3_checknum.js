// Write a function that takes a number as input and determines if it is positive or negative.
function checkNumber(a) {
    if (a > 0) {
        return "The number is positive.";
    } else if (a < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

console.log(checkNumber(5));   
console.log(checkNumber(-3));  
console.log(checkNumber(0));