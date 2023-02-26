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

const multiply = function() {
	let result
  for(i = 1; i<set.length; i++) {
    result += Number(set[i])
  }
  return toString(result)
};

const power = function() {
	
};

const factorial = function() {
	
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
