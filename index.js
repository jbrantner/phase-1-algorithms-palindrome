function isPalindrome(word) {
  const wordArray = word.split('')

  // creates wordArrayFlipped and adds a flipped wordArray to it
  const wordArrayFlipped = [];
  for(let i = wordArray.length - 1; i >= 0; i--){
    wordArrayFlipped.push(wordArray[i])
  }

  // checks to see if the arrays are the same. If yes, result = true, if no, result = false
  let result = true;
  for(let i = wordArray.length - 1; i > 0; i--){
    if (result === false){
      break
    }
    if (wordArray[i] === wordArrayFlipped[i]){
      result = true;
    }
    if (wordArray[i] !== wordArrayFlipped[i]){
      result = false
    }
  }

  return result

}
  



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  
  convert input into an array of letters

  make a copy and flip the array

  compare the array elements to the flipped array

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
