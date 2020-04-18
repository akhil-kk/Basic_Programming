// write a program to check if a number is perfect number or not

const checkPerfectNumber = (number) => {
	let devisorArray = [];
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if ((number % i) === 0) {
			devisorArray.push(i);
		}
	}
	for (let i = 0; i < devisorArray.length; i++) {
		sum = sum + parseInt(devisorArray[i]);
	}
	if (sum === number) {
		return true;
	} else {
		return false;
	}
}

console.log(checkPerfectNumber(6));