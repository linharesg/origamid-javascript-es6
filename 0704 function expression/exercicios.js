(() => {

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));
//Resolução: invertida as linhas da declaração da function expression e do uso dela

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
// Resolução: código inteiro envolvido pela IIFE (() => {...})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
//Resolução: a função active recebe uma outra função como argumento. o retorno da ative é a própria ativação da função que foi passada como argumento
active(function() {
  console.log('teste de active')
})

const funcaoQualquer = () => console.log('funcao qualquer')

active(funcaoQualquer)

}
)()