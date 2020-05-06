// Write a program to fnd factorial of a number

const findFactorial = (number) => {
    let productOfNumbers = 1;
    for (let i = 1; i <= number; i++) {
        productOfNumbers = i * productOfNumbers;
    }
    return productOfNumbers;
}

console.log(findFactorial(5));