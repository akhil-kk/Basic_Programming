// Write a program to print prime numbers in given range

const checkPrimeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      primeNumber = false;
    }
  }
  return primeNumber;
}

const primeNumbersInGivenRange = (lowerRange, upperRange) => {
  let primeNumberArray = [];
  for (let j = lowerRange; j <= upperRange; j++) {
    if (checkPrimeNumber(j) === true) {
      primeNumberArray.push(j);
    }
  }
  return primeNumberArray;
}

console.log(primeNumbersInGivenRange(121, 574));