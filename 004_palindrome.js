const readline = require("readline-sync");

const palindromeCheck = (testString) => {
    const stringLength = testString.length;
    const roundedLength = Math.round(stringLength / 2);
    let palindrome = true;
    for (let i = 0; i <= roundedLength; i++) {
        if (testString[i] !== testString[stringLength - 1 - i]) {
            palindrome = false;
            break;
        }
    }
    console.log(`The string is ${palindrome ? "palindrome" : "not palindrome"}`);
}

const testString = readline.question(" Enter the string : ");
palindromeCheck(testString);

