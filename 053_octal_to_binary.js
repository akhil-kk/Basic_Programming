// Octal to binary conversion

const octalToDecimal = (octalNumber) => {
  let decimalNumber = parseInt(octalNumber, 8);
  return decimalNumber;
}

const octalToBinary = (number) => {
  let result = (octalToDecimal(number)).toString(2);
  return result;
}

console.log(octalToBinary(5));