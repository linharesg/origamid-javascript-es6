// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('section p')

const somaCaracteres = Array.from(paragrafos).reduce((acc, item) => {
  return acc + item.innerText.length
}, 0)
const somaCaracteres2 = Array.prototype.reduce.call(paragrafos, (acc, item) => {
  return acc + item.innerText.length
}, 0)

console.log(somaCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;


  return elemento
}
const novoElemento = criarElemento('div', 'ativo', 'texto')


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarH1 = criarElemento.bind(null, 'h1', 'titulo')

const novoTitulo = criarH1('esse é o titulo')
paragrafos[0].append(novoTitulo)