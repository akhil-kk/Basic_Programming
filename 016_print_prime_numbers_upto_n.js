// Write a program that prints all prime numbers up to n.

const checkPrimeNumber = (number) => {
	let primeNumber = true;
	for (let i = 2; i < number; i++) {
		if ((number % i) === 0) {
			primeNumber = false;
		}
	}
	return primeNumber;
}

const printPrimeNumbersUptoN = (number1) => {
	let primeNumberArray = [];
	for (let j = 1; j <= number1; j++) {
		if (checkPrimeNumber(j) === true) {
			primeNumberArray.push(j);
		}
	}
	return primeNumberArray;
}

console.log(printPrimeNumbersUptoN(500));