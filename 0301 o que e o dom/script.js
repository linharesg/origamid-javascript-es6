// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const metodoUm = document.querySelector('.ativo')
const metodoDois = document.querySelectorAll('.ativo')[0]

console.log(metodoUm)
console.log(metodoDois)
// Retorne a linguagem do navegador

const documentLenguage = window.navigator.language

console.log(documentLenguage)

// Retorne a largura da janela

const windowWidth = window.innerWidth
console.log(windowWidth)