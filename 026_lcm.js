// // Write a program to calculate the LCM of two numbers

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

const lcm = (number1, number2) => {
  let result = (number1 * number2) / gcd(number1, number2);
  return result;
}

console.log(lcm(2, 12));