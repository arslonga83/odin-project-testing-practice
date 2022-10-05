const capitalized = (string) => {
  let newString = string[0].toUpperCase() + string.substring(1);
  return newString;
}

const reversed = (string) => {
  let newString = '';
  for (let i = string.length-1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

const Calculator = {
  add(a, b) {
    return a + b;
  }, 
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
}

module.exports = {
  capitalized,
  reversed,
  Calculator
}