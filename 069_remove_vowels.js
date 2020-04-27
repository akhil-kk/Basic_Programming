// Remove vowels from a string

const checkIfVowel = (alphabet) => {
  let vowelArray = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < 5; i++) {
    if (alphabet === vowelArray[i]) {
      return true;
    }
  }
  return false;
}

const removeVowel = (string) => {
  let withoutVowels = [];
  for (let k = 0; k < string.length; k++) {
    if (checkIfVowel(string[k]) === false) {
      withoutVowels.push(string[k]);
    }
  }
  return withoutVowels.join('');
}

console.log(removeVowel("aekkileiouul"));