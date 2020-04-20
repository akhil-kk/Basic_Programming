//Write a program to find all factors of a number

const findAllFactors = (number) => {
	let factorArray = [];
	for (let i = 0; i <= number; i++) {
		if ((number % i) === 0) {
			factorArray.push(i);
		}
	}
	return factorArray;
}

console.log(findAllFactors(18));