// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

function desestruturar(style) {
  const {backgroundColor, color, margin} = style
  console.log(backgroundColor, color, margin)
}
desestruturar(btnStyles)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
[cursoInativo, cursoAtivo] = [cursoAtivo, cursoInativo]
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

// const {bobCor: cor} = cachorro;
const {cor: bobCor} = cachorro;
console.log(bobCor)
