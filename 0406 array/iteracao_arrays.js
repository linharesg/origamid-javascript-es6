const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  // array[index] = `modificado${index}`;
  console.log(item, index, array);
});

const li = document.querySelectorAll("li");

const retornoForEach = li.forEach((i) => {
  i.classList.add("ativa");
});
console.log("retornoforeach:", retornoForEach) //foreach sempre retorna undefined

const retornoMap = carros.map((item, index, array) => {
  // console.log(item.toLocaleUpperCase(), index, array)
  return item.toLocaleUpperCase()
})
console.log("retornomap:", retornoMap) //map sempre retorna uma array com o return de cada iteração

const numeros = [2, 5, 8, 39]

const numerosX2 = numeros.map(n => n * 2)
console.log(numerosX2)

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const temposAulas = aulas.map(aula => aula.min)
console.log("tempos aulas", temposAulas)

// todos tem o mesmo resultado
const nomeAulas1 = aulas.map(aula => aula.nome)
const nomeAulas2 = aula => aula.nome;
const nomeAulas3 = function(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas2)
console.log("nomes aulas", nomeAulas2)

console.log("---------------------")
const tempos = [10, 25, 30];

const reduceTempos = tempos.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index)
  return item + acumulador
}, 0)
console.log(reduceTempos)
// com reduce sempre retornar também o retorno do loop anterior, podendo fazer somas acumuladas.

const numerosLista = [10, 25, 63, 5, 35, 19];

const maiorValor = numerosLista.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
})

console.log(maiorValor)