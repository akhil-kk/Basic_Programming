//program to check if number can be expressed as sum of squares of two whole numbers

const numberAsSumOfSquares = (number) => {
    for (let i = 0; i <= number / 2; i++) {
        for (let k = 0; k <= number / 2; k++) {
            let result = (i * i + k * k);
            if (result === number) {
                return true;
            }
        }
    }
    return false;
}

console.log(numberAsSumOfSquares(8));