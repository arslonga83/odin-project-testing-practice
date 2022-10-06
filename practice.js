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

const cipher = (offset, string) => {
  let array = string.split('');
  let newLetters = [];
  array.map(letter => {
    if (/^[a-zA-Z]+$/.test(letter)) {
      newLetters.push(convertLetter(offset, letter));
    }
    else {
      newLetters.push(letter);
    }
  })
  return newLetters.join('');
}


const convertLetter = (offset, letter) => {
  let code = letter.charCodeAt(0);
  let newCode;
  if (code > 64 && code < 91) {
    newCode = code + offset;
    if (newCode > 90) {
      newCode = newCode - 26;
    }
    if (newCode < 65) {
      newCode = newCode + 26;
    }
  }
  if (code > 96 && code < 123) {
    newCode = code + offset;
    if (newCode < 97) {
      newCode = newCode + 26;
    }
    if (newCode > 122) {
      newCode = newCode - 26;
    }
  }
  return String.fromCharCode(newCode);
}


const analyzeArray = (array) => {
  let orderedArray = array.sort();
  let min = orderedArray[0];
  let max = orderedArray[orderedArray.length-1];
  let length = orderedArray.length;
  let average = (orderedArray.reduce((a, b) => a + b, 0)) / length;
  let results = {
    average: average,
    min: min,
    max: max,
    length: length,
  }
  return results;
}








module.exports = {
  capitalized,
  reversed,
  Calculator,
  cipher, 
  analyzeArray
}