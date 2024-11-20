// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursosHtml = document.querySelectorAll('section.curso')

const arrayObjCursos = Array.from(cursosHtml).reduce((acumulador, curso, index) => {
  const nomeCurso = curso.querySelector('h1').innerText
  const descricaoCurso = curso.querySelector('p').innerText
  const aulasCurso = curso.querySelector('span.aulas').innerText
  const horasCurso = curso.querySelector('span.horas').innerText

  
  acumulador[index] = {
    nome: nomeCurso,
    descricao: descricaoCurso,
    aulas: aulasCurso,
    horas: horasCurso
  }
  // console.log(acumulador)
  return acumulador

}, {})
console.log(arrayObjCursos)

const arrayobj2 = Array.from(cursosHtml).map(curso => {
  const nomeCurso = curso.querySelector('h1').innerText
  const descricaoCurso = curso.querySelector('p').innerText
  const aulasCurso = curso.querySelector('span.aulas').innerText
  const horasCurso = curso.querySelector('span.horas').innerText
  
  return {
    nome: nomeCurso,
    descricaoCurso,
    aulasCurso,
    horas: horasCurso
  }
})
console.log(arrayobj2)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter(n => n > 100)

console.log(maioresQue100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixoIsInstrumento = instrumentos.includes('Baixo')
console.log("baixoIsInstrumento", baixoIsInstrumento)

const baixoIsInstrumento2 = instrumentos.some(item => item === 'Baixo')
console.log("baixoIsInstrumento2", baixoIsInstrumento2)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acc, item) => acc += +item.preco.replace('R$', '').replace(',', '.').trim(), 0)

console.log(valorTotal)
