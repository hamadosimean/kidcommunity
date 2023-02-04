var colorDisplay = document.getElementById("color-display");
var message = document.getElementById("message");
var options = document.querySelectorAll(".color-option");

var colors = ["red", "blue", "green", "purple","pink","darkorange"];
var targetColor;

//Select a random target color
function selectTargetColor() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.style.backgroundColor = targetColor;
  message.textContent = "Quelle boite contient la couleur d'en haut?";
}

//Assign random colors to the options
function assignColors() {
  for (var i = 0; i < options.length; i++) {

    options[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
}

//Check if the selected option is the target color
function checkAnswer(event) {
  if (event.target.style.backgroundColor === targetColor) {
    message.textContent = "Bravo!";
  } else {
    message.textContent = "Ressayer";
  }
}

selectTargetColor();
assignColors();

//Add event listeners to the options
for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", checkAnswer);
}
function help(){
  
  document.getElementById('help').innerHTML="<strong>Rafraichir la page  à chaque fois pour avoir un nouveau jeu </strong>";
    document.getElementById('help').style.color='red';

}
