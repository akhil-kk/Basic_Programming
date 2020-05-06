const readline = require("readline-sync");

const checkIfPowerOfThree = (number) => {
    let powerOfThree = false;
    for (let i = 0; i <= number; i++) {
        let powerToi = Math.pow(3, i);
        if (powerToi === number) {
            powerOfThree = true;
            break;
        }
    }
    console.log(`The entered number is a ${powerOfThree ? "power of three" : "not power of three"}`);
}

const number = readline.question(" Enter the number: ");
checkIfPowerOfThree(parseInt(number));