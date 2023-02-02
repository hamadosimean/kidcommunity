// generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// generate a random addition problem
function generateProblem() {
  var num1 = getRandomNumber();
  var num2 = getRandomNumber();
  var problem = num1 + " + " + num2 + " = ?";
  var answer = num1 + num2;
  return { problem: problem, answer: answer };
}

// check the user's answer
function checkAnswer() {
  var problem = generateProblem();
  var problemEl = document.getElementById("problem");
  problemEl.innerHTML = problem.problem;
  var userAnswer = document.getElementById("answer").value;
  var resultEl = document.getElementById("result");
  if (userAnswer == problem.answer) {
    resultEl.innerHTML = "Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.innerHTML = "Incorrect. The correct answer is " + problem.answer + ".";
    resultEl.style.color = "red";
  }
}
``
