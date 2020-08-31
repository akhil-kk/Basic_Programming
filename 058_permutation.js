// Permutations in which n people can occupy r seats in a theatre

const findFactorial = (number) => {
  let productOfNumbers = 1;
  for (let i = 1; i <= number; i++) {
    productOfNumbers = i * productOfNumbers;
  }
  return productOfNumbers;
}

const permutation = (people, seats) => {
  let result = findFactorial(people) / findFactorial(people - seats);
  return result;
}

console.log(permutation(10, 2));