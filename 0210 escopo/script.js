// 'use strict' é usado para usar javascript na forma estrita, que não deixaria declarar a variável global


function mostrarCarro() {
  carroGlobal = 'gol' // declarar variável sem let, var ou const, cria uma variáve global, que não é recomendado
  var carro = 'Fusca';
  console.log(carro)
}
mostrarCarro()

console.log(carroGlobal)
// console.log(carro) // daria um erro de descomentar

// Escopo de bloco

if (true){
  var mes = 'Dezembro';
}

if (false) {
  var semana = 3;
}

{
  var dia = 3
}
// o uso do 'var' pra declarar uma função, faz a variável 'vazar' do escopo de bloco, podendo de acessada de fora:
console.log(mes)
console.log(semana) // o var vaza do loco mesmo se naõ passar pela condição, por causa do hoisting (que lê udo que é var e manda pro inicio do código)
console.log(dia)

// Declarando variável com 'let', a variável não 'vaza'do escopo de bloco:

if (true) {
  let ano = 2024;
}

// console.log(ano) //daria um erro de descomentar


var i = 50;

for(let i = 0; i < 10; i++){
  console.log(`índice ${i}`)
}
// for(var i = 0; i < 10; i++){
//   console.log(`índice ${i}`)
// } // com o loop declarando i com var, o i recebeira o valor de 10 ao invés de 50, porque com o var, a variável vai vazar do bloco

console.log(i * 10)


const algumaConst = 'Sexta';

// const algumaConst = 'Quinta' // já da erro no começo do código e nem roda o resto, por causa do hoisting
// algumaConst = 'Quinta' // erro durante a execuçaõ pois já foi atribuído valor pra const, que não pode ser reatribuído


const data = {
  dia: 28,
  mes: 2,
  ano: 2024
}

console.log(data.ano)

data.ano = 2018

console.log(data.ano)

// mesmo declarando objeto com const, ainda é possível modificar suas propriedades e métodos

// data = 'alguma string' // daria erro porque está atribuindo um novo valor

// de preferência usar sempre const, usar o let quando for necessário atribuir algum novo valor ao longo do código



console.log('------EXERCÍCIOS------')

// Por qual motivo o código abaixo retorna com erros?

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}

// console.log(cor, marca, portas); // retornaria com erro porque 'marca' e 'protas' são acessíveis somente dentro do escopo do bloco que foram declaradas (com let e const). somente o que foi declarado com 'var' vai vazar e ficar acessível fora



