// Write a program to perform octal to decimal conversion

const octalToDecimal = (octalNumber) => {
  let decimalNumber = parseInt(octalNumber, 8);
  return decimalNumber;
}

console.log(octalToDecimal(10));