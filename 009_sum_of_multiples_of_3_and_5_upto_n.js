const readline = require("readline-sync");

const sumOfMultiplesOfThreeAndFive = (number) => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum = parseInt(i) + parseInt(sum);
        } else {
            continue;
        }
    }
    console.log(`sum of multiples of 3 and 5 up to ${number} is :`, sum);
}

const number = readline.question(" Enter the number up to which the sum of multiples of 3 and 5 is calculated : ");
sumOfMultiplesOfThreeAndFive(number);
