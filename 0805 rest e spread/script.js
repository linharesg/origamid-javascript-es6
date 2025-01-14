// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background, color) {
  background = background || 'blue';
  if(color === undefined) {
    color = 'red';
  }
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
}
function createButton2(background = 'blue', color = 'red') {

  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

const btn1 = createButton();
const btn2 = createButton('purple', 'purple');
const btn3 = createButton2();
const btn4 = createButton2('green', 'green');

console.log(btn1.style.background, btn1.style.color)
console.log(btn2.style.background, btn2.style.color)
console.log(btn3.style.background, btn3.style.color)
console.log(btn4.style.background, btn4.style.color)


// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas)
console.log(comidas)