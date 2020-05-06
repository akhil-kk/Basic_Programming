const readline = require("readline-sync");

const sumOfArray = (elements) => {
    const numberArray = elements.split(",");
    const arrayLength = numberArray.length;
    let sum = 0;
    for (let i = 0; i < arrayLength; i++) {
        sum = (parseInt(numberArray[i]) + parseInt(sum));
    }
    console.log("The sum of array elements is :", sum);
}

let elements = readline.question("Enter the array elements seperated by a comma and press ENTER when finished : ");
sumOfArray(elements);



