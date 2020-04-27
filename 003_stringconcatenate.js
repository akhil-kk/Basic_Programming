// Enter 2 strings and do the following operations
// concatenate / reverse / reverse concat / mix the letters / split in half /
//  remove all white spaces / add a character after every specific letter /

const concatenateStrings = (string1, string2) => {
  return string1 + string2;
}

const reverseStrings = (string1, string2) => {
  let convertedString1 = string1.split('');
  let convertedString2 = string2.split('');
  let reversedString1 = convertedString1.reverse();
  let reversedString2 = convertedString2.reverse();
  console.log(reversedString1.join(''), reversedString2.join(''));
}

const reverseConcat = (string1, string2) => {
  let convertedString1 = string1.split('');
  let convertedString2 = string2.split('');
  let reversedString1 = convertedString1.reverse();
  let reversedString2 = convertedString2.reverse();
  let concat = reversedString1.join('') + reversedString2.join('');
  return concat
}

const mixLetters = (string1, string2) => {
  let convertedString1 = string1.split('');
  let convertedString2 = string2.split('');
  let mixedArray = [];
  let length = (convertedString1.length + convertedString2.length) / 2;
  for (let i = 0; i < length; i++) {
    mixedArray.push(convertedString1[i]);
    mixedArray.push(convertedString2[i]);
  }
  let mixedString = mixedArray.join('');
  return mixedString;
}

const splitInHalf = (string1, string2) => {
  console.log(string1.slice(0, Math.floor(string1.length / 2)), string1.slice(Math.floor(string1.length / 2), string1.length));
  console.log(string2.slice(0, Math.floor(string2.length / 2)), string2.slice(Math.floor(string2.length / 2), string2.length));
}

const removeWhiteSpace = (string1, string2) => {
  console.log(string1.replace(/\s/g, ''));
  console.log(string2.replace(/\s/g, ''));
}

const addAcharacterBetween = (string1, string2) => {
  let convertedString1 = string1.split('');
  let convertedString2 = string2.split('');
  let resultArray1 = [];
  let resultArray2 = [];
  for (let i = 0; i < convertedString1.length; i++) {
    resultArray1.push(convertedString1[i]);
    resultArray1.push("*");
  }
  for (let j = 0; j < convertedString2.length; j++) {
    resultArray2.push(convertedString2[j]);
    resultArray2.push("*");
  }
  let finalString1 = resultArray1.join('');
  let finalString2 = resultArray2.join('')
  console.log(finalString1, finalString2);
}

console.log(concatenateStrings("akhil", "kuriakose"));
reverseStrings("akhil", "kuriakose");
console.log(reverseConcat("akhil", "kuriakose"));
console.log(mixLetters("akhil", "kuriakose"));
splitInHalf("akhil", "kuriakose");
removeWhiteSpace("akh il", "kuriak ose");
addAcharacterBetween("akhil", "kuriakose");

