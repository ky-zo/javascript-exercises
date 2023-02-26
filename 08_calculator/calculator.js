const add = function(...numbers) {
  let result = numbers[0];
  for(i = 1; i<numbers.length; i++) {
    result += Number(numbers[i])
  }
  return result
};

const subtract = function(...numbers) {
  let result = numbers[0];
  for(i = 1; i<numbers.length; i++) {
    result -= Number(numbers[i])
  }
  return result
};

const sum = function(set) {
	let result = 0
  for(i = 0; i<set.length; i++) {
    result += Number(set[i])
  }
  return result
};

const multiply = function(set) {
	let result = 1
  for(i = 0; i < set.length; i++) {
    result *= Number(set[i])
  }
  return result
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(x) {
	let result = 1
  if (x == 0) {
    return 1
  } else {
    for(i = x; i > 0; i--) {
      result *= i
    }
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
