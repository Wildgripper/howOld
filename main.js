// Write your function here:
const howOld = (age, year) => {
  if (year > 2020) {
    return `You will be ${age + year - 2020} in the year ${year}`;
  } else if (year < 2020 && age - 2020 + year >= 0) {
    return `You were ${age - 2020 + year} in the year ${year}`;
  } else {
    return `The year ${year} was ${2020 - year - age} years before you were born`;
  }
}




// Once your function is written, write function calls to test your code!
console.log(howOld(15, 2020));
