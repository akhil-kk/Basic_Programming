//Write a program to check an year is leap year or not.


const checkLeapYear = (year) => {
    return ((year % 4 == 0) ? true : false);
}

console.log(checkLeapYear(2025));
