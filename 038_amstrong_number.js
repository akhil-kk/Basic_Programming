// Write a prgram to check if a number is Amstrong number or not.

const amstrongNumberCheck = (number) => {
	let numberToString = String(number);
	let sum = 0;
	for (let i = 0; i < String(number).length; i++) {
		sum = sum + Math.pow(parseInt(numberToString[i]), 3);
	}
	if (sum === number) {
		return true;
	} else {
		return false
	}
}

console.log(amstrongNumberCheck(153));