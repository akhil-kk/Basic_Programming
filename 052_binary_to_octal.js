// binary to octal conversion.

const binaryToDecimal = (binaryNumber) => {
  let decimalNumber = parseInt(binaryNumber, 2);
  return decimalNumber;
}

const binaryToOctal = (number) => {
  let result = (binaryToDecimal(number)).toString(8);
  return result;
}

console.log(binaryToOctal(1001));
