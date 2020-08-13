// Write a program to Armstrong numbers between two intervals

const armstrongNumberCheck = (number) => {
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

const armstrongNumbersInRange = (lowerRange, upperRange) => {
  let armstrongNumberArray = [];
  for (let j = lowerRange; j <= upperRange; j++) {
    if (armstrongNumberCheck(j) === true) {
      armstrongNumberArray.push(j);
    }
  }
  return armstrongNumberArray;
}

console.log(armstrongNumbersInRange(1, 500));