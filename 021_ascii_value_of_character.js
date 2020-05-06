//Write a program to check Uppercase, Lowercase or special character

const printASCIIvalue = (character) => {
    const characterLength = character.length;
    for (let i = 0; i < characterLength; i++) {
        asciiValue = character.charCodeAt(i);
        console.log(`ASCII value of character ${character[i]} is : ${asciiValue}`);
    }
}

printASCIIvalue("AKHIL");