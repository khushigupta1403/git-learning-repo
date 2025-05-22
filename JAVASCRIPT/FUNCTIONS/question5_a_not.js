
//  Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’function containsLetterA(str) {
function containsLetterA(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            return "The string contains the letter 'a' or 'A'.";
        }
    }
    
    return "The string does not contain the letter 'a' or 'A'."
}

console.log(containsLetterA("Promise"));  
console.log(containsLetterA("Alpha"));         
console.log(containsLetterA("parul")); 