// Write a program to check if a number be expressed as a sum of two prime numbers?

const checkPrimeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      primeNumber = false;
    }
  }
  return primeNumber;
}

const numberAsSumOfPrimeNumbers = (number1) => {
  let result;
  for (let j = 1; j <= number1; j++) {
    for (let k = 1; k <= number1; k++) {
      if (checkPrimeNumber(j) === true && checkPrimeNumber(k) === true) {
        result = j + k;
        if (result === number1) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(numberAsSumOfPrimeNumbers(6));