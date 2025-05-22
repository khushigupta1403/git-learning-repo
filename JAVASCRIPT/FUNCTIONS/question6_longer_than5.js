// Write a function that takes a string as input and determines if it is longer than 5 characters
function LongerThanFive(str) {
if (str.length > 5) {
        return "The string is longer than 5 characters.";
    } else {
        return "The string is not longer than 5 characters.";
    }
}
console.log(LongerThanFive("alpha"));       
console.log(LongerThanFive("How are you")); 
console.log(LongerThanFive("JavaScript is easy language")); 
