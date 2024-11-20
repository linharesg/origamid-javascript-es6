const instrumentos1 = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Ford");
dados[1][2].cor; // azul

const carros = new Array("Ford", "Fiat", "Honda");

console.log(carros[2]);
carros[2] = "Ferrari"; // subscreve sobre o índice da array
console.log(carros[2]);
console.log(carros.length);
carros[20] = "Kia"; // cria o índice 20, fazendo o array ter itens, porém todos os outros no meio são vazios
console.log(carros);
console.log(carros.length);

const li = document.querySelectorAll("li");
console.log(li.constructor); //NodeList
const arrayLi = Array.from(li);
console.log(arrayLi.constructor); // Array

const obj = {
  0: "Gabriel",
  1: "Socreppa",
  2: "linhares",
  length: 3 // o objeto deve ter o length para ser transformado em array
};

const objArray = Array.from(obj)
console.log(objArray)

console.log(Array.isArray(li))
console.log(Array.isArray(arrayLi))

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos)
instrumentos.sort() //ordena em ordem alfabética
console.log(instrumentos)

const idades = [32,21,33,43,1,12,8];
console.log(idades)
idades.sort() //ordena como se fose uma string, não por ordem numérica
console.log(idades)

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
console.log(carros2); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

const transportes1 = ['Barco', 'Aviao']
const transportes2 = ['moto', 'carro']

const maisTransportes = [].concat(transportes1, transportes2, 'helicoptero')
console.log(maisTransportes)
console.log(transportes1)
const alternativa = transportes1.concat(transportes2, 'helicoptero')
console.log(alternativa)

let htmlString = '<h2>Título principal</h2>'
console.log(htmlString)
htmlString = htmlString.split('h2')
console.log(htmlString)
htmlString = htmlString.join('h3')
console.log(htmlString)

const linguagens = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens)
const cloneLinguages = linguagens.slice() // usado para clonar slice (além de fatiar, se passar argumentos)

