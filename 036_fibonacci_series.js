// Write a program to find Fibonacci series up ton

const findFibonacciSeries = (number) => {
    let fibonacciArray = ['0', '1'];
    for (let i = 2; i <= number; i++) {
        fibonacciArray.push(parseInt(fibonacciArray[i - 2]) + parseInt(fibonacciArray[i - 1]));
    }
    return fibonacciArray;
}

console.log(findFibonacciSeries(8));



