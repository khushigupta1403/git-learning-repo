// const countVowels = (str) => {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("JavaScript is awesome"));  


// question 5
const countAlpha = (str) => {
  const withoutAlpha = str.replaceAll("Alpha", "");
  return (str.length - withoutAlpha.length) / "Alpha".length;
};

console.log(countAlpha("AlphaIntern AlphaDev AlphaAI"));

