//Write a program that prints the next 20 leap years.

const printLeapYear = () => {
    let count = 1;
    let year = 2020;
    console.log("The next 20 leap years are");
    while (count <= 20) {
        if ((year % 4) === 0) {
            console.log(`${count}) ${year}`);
            year = year + 1;
            count = count + 1;
        }
        year = year + 1;
    }
}

printLeapYear();
