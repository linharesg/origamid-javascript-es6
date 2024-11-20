function areaRetangulo(altura, base) {
  return base * altura
}

const areaAlternativa = new Function ('lado', 'altura', 'return lado * lado')

console.log("numero de argumentos da função:", areaAlternativa.length)
console.log("nome da função:", areaAlternativa.name)

function darOi(nome) {
  console.log('oi pra vc ' + nome)
}

darOi()
darOi.call({}, 'gabriel')


window.marca = 'carro_window'
window.ano = 'ano_window'

function descricaoCarro(velocidade) {
  console.log(this)
  console.log(this.marca + ' ' + this.ano + ' ' + velocidade)
}
descricaoCarro(20) // chamando função assim, o 'this' vai fazer sempre referência ao 'window'

descricaoCarro.call({marca: 'marca_nova', ano: 'ano_novo'}, 30) // com call(), consigo mudar a referência do this
console.log("------------------------")

const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pera']

carros.forEach((item) => {
  console.log(item)
})
carros.forEach.call(frutas, (item) => {
  console.log(item)
})

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
  element: document.querySelector('li')
}

console.log(ul)
ul.ativo('ativar')
ul.ativo.call(li, 'ativar_li')

Dom.prototype.ativo.call(li, 'ativar_li2')
// o call acaba sendo usado pra acessar métodos e propriedades de algum objeto parecido com o m´todo construtor, sem necessariamente declarar esse ojeto como sendo desse "tipo"
console.log("------------------------")

const frutas2 = ['Banana', 'Uva', 'Pera']

Array.prototype.mostrarThis = function() { //não e boa pratica modificar construtor nativo
  console.log(this)
}

frutas2.mostrarThis();

Array.prototype.pop.call(frutas2)
frutas.pop(); // fazem exatamente a mesma coisa

console.log(frutas2)

const arrayLike = { // qualquer objeto 'array like' (parecido com array) podem ser usados métodos de array, por exemplo
  0: "item1",
  1: "item2",
  2: "item3",
  length: 3
}

const li2 = document.querySelectorAll('li') // parece ocm array

const filtro = Array.prototype.filter.call(li2, (item) => {
  return item.classList.contains('teste')
})

console.log(filtro)
console.log("------------APPLY----------")
const maxNum = Math.max(43,27,34,98,45)
console.log(maxNum)
const arrayNum = [43,27,34,98,45]
const maxArray = Math.max(arrayNum)
console.log(maxArray) // NaN: não funcionar porque pra esse método tem que passar os numeros como argumentos diferentes, não um unico argumento com array
//Solucionando com apply
const arrayNumSolucionado = Math.max.apply(null, arrayNum)
console.log(arrayNumSolucionado)
console.log(Math.max(...arrayNum)) //alternativa (ainda não explicado o uso do "...")

console.log('--------BIND----------')

const carro = {
  marca: 'ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}
console.log(carro.acelerar(200, 10))

const carroHonda = {
  marca: 'Honda',
  nao_precisa_ter_idade: true
}

const acelerarHonda = carro.acelerar.bind(carroHonda)
const acelerarHonda2 = carro.acelerar.bind(carroHonda, 20)

console.log(acelerarHonda(400, 50))
console.log(acelerarHonda2(12))

function imc(altura, peso) {
  return peso / (altura * altura)
}

const imc180 = imc.bind(null, 1.8)

console.log(imc(1.8, 70))
console.log(imc180(70))