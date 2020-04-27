// Write a function that checks whether an element occurs in a list.

const searchForElement = (bigBasket, itemToFind) => {
  for (let i = 0; i < bigBasket.length; i++) {
    if (bigBasket[i] === itemToFind) {
      return true;
    }
  }
  return false;
}

let basket = [1, 2, 15, 4, 5, 6, 7, 8, 6];
console.log(searchForElement(basket, 4));
