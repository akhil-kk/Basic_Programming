// Replace all 0's with 1 in a given integer

const replaceZeroWithOne = (number) => {
  let numberAsArray = String(number).split('');
  for (let i = 0; i <= numberAsArray.length; i++) {
    if (parseInt(numberAsArray[i]) === 0) {
      numberAsArray[i] = (parseInt(numberAsArray[i]) + 1);
    }
  }
  backToNumber = parseInt(numberAsArray.join(''));
  return backToNumber;
}

console.log(replaceZeroWithOne(400));