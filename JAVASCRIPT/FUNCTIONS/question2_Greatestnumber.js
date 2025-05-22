// Write a function that takes two numbers as input and determines which one is greater.
function Greaternumber(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater.";
    } else if (num2 > num1) {
        return num2 + " is greater.";
    } else {
        return "Both numbers are equal.";
    }
}

console.log(Greaternumber(10, 20));









