const frutas = ['banana', 'Pera', 'uva', 'macas']

const temUva = frutas.some((item, index) => {
  // console.log(item)
  console.log(`some [${index}]: ${item}`)
  return item === 'uva'
})
console.log(temUva)
// some: retoarna TURE ou fALSE caso a condicao da função seja atendida pra pelo menos 1 item da array. assmiq ue encontra o primeiro true, a iteração para (até porque a condição pra definir o retorno já foi atendida e nao interessa mais se os outros itens também são true ou não)

const every = frutas.every((item, index) => {
  console.log(`every [${index}]: ${item}`)
  return item === 'banana'
})
console.log(every)
//  every: retorna TRUE caso TODOS os itns da array retornem true. iteração par assim que encontrar o primeiro false

// verificando se todos os itens da array são maior que 3

const numeros = [6, 34, 65, 3, 9, 7, 4]

const MaiorQue3 = numeros.every(n => n> 3)
const mesmaCoisaSemArrow = numeros.every(function(n){
  return n > 3
})
console.log(`maiorque 3: ${MaiorQue3}`)
console.log(`mesmaCoisaSemArrow 3: ${mesmaCoisaSemArrow}`)


const indexUva = frutas.findIndex(item => {
  return item === 'uva'
})

const startWithU = frutas.find(item => {
  return item.toLowerCase().startsWith('pe')
})
console.log(startWithU)
console.log(indexUva)

const frutasMaiorQue4Char = frutas.filter(fruta => {
  return fruta.length > 4
})
console.log("frutasMaiorQue4Char:", frutasMaiorQue4Char)
console.log(numeros.find(numero => numero > 34))