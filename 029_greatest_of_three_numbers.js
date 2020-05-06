// Write a program to find Greatest of three numbers
// conditional operator is used to compare the resul of comparing number1 and number 2
// to compare with number 3. 

const checkWhichIsGreater = (number1, number2, number3) => {
    return ((number1 > number2 ? number1 : number2) > number3 ? (number1 > number2 ? number1 : number2) : number3);
}

console.log(checkWhichIsGreater(50, 60, 70));