const readline = require("readline-sync");

const sumUptoNumberN = (number) => {
    const sumOfNumbers = ((parseInt(number) + 1) / 2) * parseInt(number);
    console.log(` The total sum of numbers from 1 to ${number} is `, sumOfNumbers);
}

const number = readline.question(" Enter the number up to which the sum is calculated : ");
sumUptoNumberN(number);