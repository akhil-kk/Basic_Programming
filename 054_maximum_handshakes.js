// Maximum number of handshakes

const numberOfhandShakes = (numberOfPeople) => {
  let result = numberOfPeople * ((numberOfPeople - 1) / 2);
  return result;
}

console.log(numberOfhandShakes(10));