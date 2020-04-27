// Length of the string without using strlen() function

const stringlenWithoutFn = (string) => {
  let i = 0;
  let sampleArray = string.split('');
  sampleArray.push(' ');
  while (sampleArray[i] != ' ') {
    i = i + 1;
  }
  return i;
}

console.log(stringlenWithoutFn("akhilKuriakose"));