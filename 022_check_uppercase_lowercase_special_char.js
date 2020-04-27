// Write a program to check Uppercase, Lowercase or special character

const checkUppeerCase = (character) => {
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    return true;
  } else {
    return false;
  }
}

const checkLowerCase = (character) => {
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 97 && asciiValue <= 122) {
    return true;
  } else {
    return false;
  }
}

const checkSpecialChar = (character) => {
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 32 && asciiValue <= 47 || asciiValue >= 58 && asciiValue <= 64 || asciiValue >= 91 && asciiValue <= 96 || asciiValue >= 123 && asciiValue <= 126) {
    return true;
  } else {
    return false;
  }
}

console.log(checkUppeerCase("a"));
console.log(checkLowerCase("a"));
console.log(checkSpecialChar("]"));