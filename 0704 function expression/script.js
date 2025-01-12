console.log(somar(1, 1)) // funciona por causa do hoisting: a função é lida antes rodar o console.log, netão quando roda o console.log, a função já existe

function somar(a,b) {
  return a + b
}


// console.log(somarExpression(1, 2)) // não funciona pois a função ainda não foi declarada. o const somarExpression faz essa variável ficar na 'temporary deadzone', então é como se a função não existise

const somarExpression = function(a, b) {
  return a + b
}
console.log(somarExpression(1, 3)) // aqui funciona porque a função já existe.


// com arrow function

const somarArrow = (a, b) => a + b
console.log(somarArrow(1, 4))

const quadradoArrow = a => a**2
console.log(quadradoArrow(3))

// IIFE: Immediately Invoked Function Expression

const instrumento = 'Violão'; // nesse caso aqui precisa do ponto e vírgula, se não vai interpretar como se Violão fosse uma função.

(() => {
  const instrumento = 'Guitarra'
  console.log(instrumento)
})()

console.log(instrumento)