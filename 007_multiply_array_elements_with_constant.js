const readline = require("readline-sync");

const multiplyArrayWithConstant = (elements, constant) => {
    const numberArray = elements.split(",");
    const arrayLength = numberArray.length;
    let resultArray = [];
    for (let i = 0; i < arrayLength; i++) {
        resultArray[i] = (parseInt(numberArray[i]) * constant);
    }
    console.log("The result array is : ", resultArray);
}

let elements = readline.question("Enter the array elements seperated by a comma and press ENTER when finished : ");
const constant = readline.question("Enter the constant to multiply the array elements : ");
multiplyArrayWithConstant(elements, constant);
