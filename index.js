lucide.createIcons();

const slider = document.getElementById("charLengthSlider");
const display = document.getElementById("charLengthDisplay");

function updateSlider() {
  const value = slider.value;
  display.textContent = value;
  const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--progress", percent + "%");
}

slider.addEventListener("input", updateSlider);

let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let password = document.getElementById("generated-password");
let emptyString = "";

function generateRandomPassword() {
  emptyString = "";
  let charLength = document.getElementById("charLengthSlider").value;

  for (let index = 0; index < charLength; index++) {
    let randomIndex = Math.floor(Math.random() * characters.length); // range is gonna be from 0 - 52
    emptyString += characters[randomIndex];
  }

  password.textContent = emptyString;
}
