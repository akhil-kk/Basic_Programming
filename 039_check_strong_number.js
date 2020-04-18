// Write a program to check a number is Strong number or not

const findFactorial = (number) => {
	let productOfNumbers = 1;
	for (let i = 1; i <= number; i++) {
		productOfNumbers = i * productOfNumbers;
	}
	return productOfNumbers;
}

const checkStrongNumber = (number1) => {
	let numberToString = String(number1);
	let sum = 0;
	for (let i = 0; i < String(number1).length; i++) {
		sum = sum + findFactorial(parseInt(numberToString[i]));
	}
	if (sum === number1) {
		return true;
	} else {
		return false;
	}
}

console.log(checkStrongNumber(145));