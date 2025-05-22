//  Write a function that takes a number as input and determines if it is even or odd
function EvenOdd(x) {
    if (x % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}

console.log(EvenOdd(4)); 
console.log(EvenOdd(7));