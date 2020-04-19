// Write a program to check a number is positive or negative
// number returns 1 if positive and -1 if negative.
// returns 0 if 0 is given as input 

const checkSignOfNumber = (number) => {
    return (Math.sign(number));
}

console.log(checkSignOfNumber(0));
