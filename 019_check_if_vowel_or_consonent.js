// Write a program to check if a character is a vowel or consonant

const checkvowelOrConsonent = (alphabet) => {
    let vowelArray = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < 5; i++) {
        if (alphabet === vowelArray[i]) {
            return true;
        }
    }
    return false;
}

console.log(checkvowelOrConsonent("f"));