// Write a program to calculate the GCD of two numbers

const gcd = (number1, number2) => {
  let smallerNumber = number1 < number2 ? number1 : number2;
  let highestDivisor;
  for (let i = 1; i <= smallerNumber; i++) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      highestDivisor = i;
    }
  }
  return highestDivisor;
}

console.log(gcd(45, 54));