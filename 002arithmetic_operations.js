const readline = require("readline-sync");

const add = (number1, number2) => {
    let sum = (parseInt(number1) + parseInt(number2));
    console.log("The sum is ", sum);
}

const substract = (number1,number2) => {
    let difference = number1 - number2;
    console.log("The difference is ", difference);
}

const multiply = (number1, number2) => {
    let product = number1 * number2;
    console.log("The product is ", product);
}

const divide = (number1, number2) => {
    let quotient = number1 / number2;
    console.log("The quotient is ", quotient);
}

const modulus = (number1, number2) => {
    let remainder = number1 % number2;
    console.log("The remainder is ", remainder);
}

const compare = (number1, number2) => {
    if (number1 > number2) {
        console.log("The larger value is", number1);   
    } else if (number1 === number2) {
        console.log("Both numbers are equal")
    } else {
        console.log("The larger value is ", number2)
    }
}

const number1 = readline.question("Enter the 1st number : ");
const number2 = readline.question("Enter the 2nd number : ");
add(number1, number2);
substract(number1, number2);
multiply(number1, number2);
divide(number1, number2);
modulus(number1, number2);
compare(number1, number2);