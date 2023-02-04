const words = ['cat', 'dog', 'bird', 'fish'];
let currentWord;

const wordContainer = document.getElementById('word');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

function selectWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordContainer.innerHTML = currentWord;
}

function selectOptions() {
  option1.innerHTML = words[Math.floor(Math.random() * words.length)];
  option2.innerHTML = words[Math.floor(Math.random() * words.length)];
  option3.innerHTML = words[Math.floor(Math.random() * words.length)];
}

selectWord();
selectOptions();

option1.addEventListener('click', checkAnswer);
option2.addEventListener('click', checkAnswer);
option3.addEventListener('click', checkAnswer);

function checkAnswer(event) {
  if (event.target.innerHTML == currentWord) {
    alert('Correct!');
    selectWord();
    selectOptions();
  } else {
    alert('Incorrect.');
  }
}
