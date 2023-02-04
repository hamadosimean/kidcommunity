const words = ["soutenir","parent","pomme", "banane", "cerise","robot","voiture","vélo","souris","maison","école","fille","garçcon","aider","aimer"];
let currentWord;

const scrambledWordEl = document.querySelector("#scrambled-word");
const userInputEl = document.querySelector("#user-input");
const checkButtonEl = document.querySelector("#check-button");
const resultEl = document.querySelector("#result");

function init() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambledWordEl.textContent = scrambleWord(currentWord);
}

function scrambleWord(word) {
  return word.split("").sort(() => 0.5 - Math.random()).join("");
}

checkButtonEl.addEventListener("click", () => {
  if (userInputEl.value === currentWord) {
    resultEl.textContent = "Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "Incorrect. Essayez à nouveau.";
    resultEl.style.color = "red";
  }
});

init();
