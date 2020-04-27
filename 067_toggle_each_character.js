// Toggle each character in a string

const checkCase = (character) => {
  let asciiValue = character.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    return true;
  } else {
    return false;
  }
}

const toggleCharacters = (string) => {
  let toggledString = [];
  for (let j = 0; j < string.length; j++) {
    if (checkCase(string[j]) === true) {
      toggledString.push(string[j].toLowerCase());
    } else {
      toggledString.push(string[j].toUpperCase());
    }
  }
  return toggledString.join('');
}

console.log(toggleCharacters("aKHlKURIAKOse"));