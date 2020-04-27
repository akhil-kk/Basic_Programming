// Number of integers which has exactly 9 divisors

const performDivision = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count = count + 1;
    }
  }
  return count;
}

const checkForNineDivisors = (limit) => {
  let NumbersWithNineDivisors = [];
  for (let k = 1; k <= limit; k++) {
    if (performDivision(k) === 9) {
      NumbersWithNineDivisors.push(k);
    }
  }
  return NumbersWithNineDivisors;
}

console.log(checkForNineDivisors(100));
