// generate two random numbers between 1 and 10
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

// generate a random operator (+, -, *, /)
var operators = ['+', '-', '*', '/'];
var operator = operators[Math.floor(Math.random() * operators.length)];

// perform the calculation
var result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
}

console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + result);
