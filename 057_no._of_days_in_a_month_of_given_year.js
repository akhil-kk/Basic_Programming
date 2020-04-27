// Number of days in a given month of a given year

const numberOfdaysInMonth = (year, month) => {
  if (year % 4 === 0 && month === 2) {
    return 29;
  } else if (month === 2) {
    return 28;
  } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else {
    return 30;
  }
}

console.log(numberOfdaysInMonth(2016, 2));