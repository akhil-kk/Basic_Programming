// Number of times digit 3 occurs in each and every number from 0 to n

const checkForThree = (number) => {
  let count = 0;
  let convertedNumber = String(number);
  for (let i = 0; i <= convertedNumber.length; i++) {
    if (parseInt(convertedNumber[i]) === 3) {
      count = count + 1;
    }
  }
  return count;
}

const numberOfTimesThreeOccur = (range) => {
  let totalCount = 0;
  for (let k = 1; k <= range; k++) {
    totalCount = checkForThree(k) + totalCount;
  }
  return totalCount;
}

console.log(numberOfTimesThreeOccur(100));