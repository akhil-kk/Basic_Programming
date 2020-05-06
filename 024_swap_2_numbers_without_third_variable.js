//Write a program to Swap two numbers without third variable

const swapNumbers = (number1, number2) => {
    number1 = (number1 + number2);
    number2 = (number1 - number2);
    number1 = (number1 - number2);
    return [number1, number2];
}

console.log("The swapped numbers are", swapNumbers(5, 6));
