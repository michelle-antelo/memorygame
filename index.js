const gameContainer = document.getElementById("game");
let color1 = null;
let color2 = null;
matches = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {

  let thisColor = event.target;
  thisColor.style.backgroundColor = thisColor.classList[0];
  console.log(thisColor);

  if (!color1 || !color2){
    color1 = color1 || thisColor;
    color2 = thisColor === color1 ? null : thisColor;
  }

  if (color1 && color2) {
    let turn1 = color1.className;
    let turn2 = color2.className;

    if (turn1 === turn2) {
      matches += 2;
      color1.removeEventListener("click", handleCardClick);
      color2.removeEventListener("click", handleCardClick);
      color1 = null;
      color2 = null;
    } else {
      setTimeout(function() {
        color1.style.backgroundColor = "";
        color2.style.backgroundColor = "";
        color1 = null;
        color2 = null;
      }, 1000);
    }
  }
  if (matches === COLORS.length) alert("GOOD JOB!");
  console.log(matches);
}

createDivsForColors(shuffledColors);