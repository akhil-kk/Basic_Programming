// Add two fractions

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

const addFractions = (numerator1, denominator1, numerator2, denominator2) => {
  let resultNumerator, resultDenominator, finalNumerator, finalDenominator;
  resultNumerator = (numerator1 * denominator2) + (numerator2 * denominator1);
  resultDenominator = denominator1 * denominator2;
  finalNumerator = resultNumerator / gcd(resultNumerator, resultDenominator);
  finalDenominator = resultDenominator / gcd(resultNumerator, resultDenominator);
  return (finalNumerator + "/" + finalDenominator);

}

console.log(addFractions(1, 4, 2, 4));