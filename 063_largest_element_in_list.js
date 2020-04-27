// Write a function that returns the largest element in a list.

const largestElementInArray = (numberArray) => {
  let larger = 0;;
  for (let i = 0; i < numberArray.length; i++) {
    if (parseInt(numberArray[i]) > larger) {
      larger = numberArray[i]
    }
  }
  return larger;
}

let sampleArray = [1, 2, 15, 4, 5, 6, 485];
console.log(largestElementInArray(sampleArray));











let sampleNumberArray = [1, 2, 3, 4, 5, 6, 7];
