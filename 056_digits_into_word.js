// Convert digit/number to words

const digitsToWords = (number) => {
  let wordArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let convertedNumber = String(number);
  let resultArray = [];
  for (let j = 0; j < convertedNumber.length; j++) {
    for (let i = 0; i < wordArray.length; i++) {
      if (parseInt(convertedNumber[j]) === i) {
        resultArray.push(wordArray[i]);
      }
    }
  }
  let words = resultArray.join(' ');
  return words;
}

console.log(digitsToWords(5864545));