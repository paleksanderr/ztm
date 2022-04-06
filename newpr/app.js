

let button = document.querySelector('#enter')
let input = document.querySelector('#userInput');

function inputLength() {
  return input.value.length    
}
function createListElement() {
  { 
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  document.querySelector('ul').appendChild(li);}
  input.value = '';
}

function addListByClick() {
  if (inputLength() > 0) createListElement();
}
function addListByKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) 
    createListElement();
  }
button.addEventListener('click', addListByClick);
input.addEventListener("keypress", addListByKeypress );
