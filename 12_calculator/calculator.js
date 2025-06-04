const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, value) => acc + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, value) => acc * value, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let ans = 0;
  if (a === 0 || a === 1) {
    ans += 1;
  }
  else {
    ans += a * factorial(--a);
  }

  return ans;
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
