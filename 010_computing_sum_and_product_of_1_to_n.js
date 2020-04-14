const readline = require("readline-sync");

const selectOperation = (choice) => {
    if ( choice == "m") {
        multiplyUptoNumberN(number);
    } else if ( choice == "s") {
        sumUptoNumberN(number); 
    } else {
        console.log("Please enter a valid response: ")
    }
}

const sumUptoNumberN = (number) => {
    const sumOfNumbers = ((parseInt(number) + 1) / 2) * parseInt(number);
    console.log(` The total sum of numbers from 1 to ${number} is `, sumOfNumbers);
}

const multiplyUptoNumberN = (number) => {
    let productOfNumbers = 1;
    for (let i=1; i<=number;i++) {
        productOfNumbers = i * productOfNumbers;
    }
    console.log(` The total product of numbers from 1 to ${number} is `, productOfNumbers);
}

const number = readline.question(" Enter the number up to which the sum/product has to be calculated:  ");
const choice = readline.question("Enter S for calculating sum, M for calculating product:  ");
selectOperation(choice);

