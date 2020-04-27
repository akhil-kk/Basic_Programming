// reverse a list

const reverseList = (numberArray) => {
  let reversedArray = []
  for (let i = 0; i < numberArray.length; i++) {
    reversedArray.push(numberArray[numberArray.length - 1 - i]);
  }
  return reversedArray;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseList(numbers));
