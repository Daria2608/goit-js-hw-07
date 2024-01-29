function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector('body');
const colorName = document.querySelector('.color');
const button = document.querySelector('.change-color');

function changeColor() {
  const newColor = getRandomHexColor();
  background.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}

button.addEventListener('click', changeColor)
