// Write program to find the sum of given numbers in a range

const sumOfNumbersInRange = (lowerRange, upperRange) => {
    let sumUptoUpperRange = upperRange * (upperRange + 1) / 2 ;
    let sumUptoLowerRange = (lowerRange - 1) * (lowerRange) / 2 ;
    return (sumUptoUpperRange - sumUptoLowerRange);
}

console.log(sumOfNumbersInRange(10, 15));