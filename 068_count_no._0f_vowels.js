// Count the number of vowels

const checkIfVowel = (alphabet) => {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (alphabet === vowelArray[i]) {
      return true;
    }
  }
  return false;
}

const countVowels = (string) => {
  let count = 0;
  for (let j = 0; j < string.length; j++) {
    if (checkIfVowel(string[j]) === true) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countVowels("akhileiou"));