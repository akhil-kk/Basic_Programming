// write a program to Reverse a given number

const ReverseNumber = (number) => {
	let numberToString = String(number);
	let stringLength = numberToString.length;
	let reversedNumber = [];
	for (let i = 0; i < stringLength; i++) {
		reversedNumber[i] = numberToString[stringLength - 1 - i];
	}
	return reversedNumber;
}

console.log(ReverseNumber(2567));