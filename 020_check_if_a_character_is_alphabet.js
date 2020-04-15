// Write a program to check if a character is a vowel or consonant

const checkIfAlphabet = (character) => {
    if (isNaN(character) === true) {
        return true;
    } else {
        return false;
    }
}

console.log(checkIfAlphabet("k"));

