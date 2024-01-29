function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const box = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]')
const inputQuantity = document.querySelector('input')
let boxArray = [];


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = 30+(10 * i)+'px';
    newBox.style.height = 30+(10 * i)+'px';
    box.append(newBox);
    boxArray.push(newBox);
  }
}

function buttonValue(event) {
  event.preventDefault();
  const inputValue = inputQuantity.value;
  const inputNum = parseInt(inputValue, 10);
  if (inputNum >= 1 && inputNum <= 100) {
    createBoxes(inputNum);
  }
  inputQuantity.value = ""
}

function deleteBoxes(event) {
  event.preventDefault();
  boxArray.forEach(box => box.remove());
}

inputQuantity.addEventListener('input', createBoxes)
createButton.addEventListener('click', buttonValue)
destroyButton.addEventListener('click', deleteBoxes)