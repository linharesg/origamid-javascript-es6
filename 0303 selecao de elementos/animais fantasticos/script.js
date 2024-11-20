
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index){
  console.log(`${index}`, item)
})

// HTMLCollection não possui o método forEach

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item, index){
  console.log(`${index}`, item)
}) 
console.log("EXERCICIOS ----------------------")

// Retorne no console todas as imagens do site
console.log(document.querySelectorAll('img'))
// Retorne no console apenas as imagens que começaram com a palavra imagem
console.log(document.querySelectorAll('img[src^="img/imagem"]'))
// Selecione todos os links internos (onde o href começa com #)
console.log(document.querySelectorAll('a[href^="#"]'))
// Selecione o primeiro h2 dentro de .animais-descricao
console.log(document.querySelector('.animais-descricao h2'))
console.log(document.querySelectorAll('.animais-descricao h2')[0])
// Selecione o último p do site
console.log(document.querySelectorAll('p')[document.querySelectorAll('p').length-1])

console.log("ARROW FUNCTION -------------")

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item) {
  console.log(item)
});

imgs.forEach((item) => {
  console.log(item)
});

imgs.forEach(item => console.log(item))

let i = 0;
imgs.forEach(() => console.log(i++))

console.log('EXERCICIO -------------')
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach(paragrafo => console.log(paragrafo))

// Mostre o texto dos parágrafos no console
paragrafos.forEach(paragrafo => console.log(paragrafo.innerText))

// Como corrigir os erros abaixo:

const imgsCorrigido = document.querySelectorAll('img');
imgsCorrigido.forEach((item, index) => {
  console.log(item, index) ;
  });
  
  let j = 0;
  imgsCorrigido.forEach (() => {
  console.log(j++);
  });
  
  imgsCorrigido.forEach(() => j++);

  console.log("EXERCICIOS 0305 CLASSES E ATRIBUTOS")
  
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu li')

itensMenu.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item, index) => {
  if (index !== 0) {
    item.className = ''
  }
})

// Verifique se as imagens possuem o atributo alt

imgs.forEach((img) => {
  if (!img.hasAttribute('alt')) {
    console.log(`${img.getAttribute('src')} não possui alt`)
  }
})

// Modifique o href do link externo no menu
linksExternosMenu = document.querySelectorAll('.menu a[href^="http"]')
linksExternosMenu.forEach((item) => {
  
  const currentHref = item.getAttribute('href')
  const appendHref = (currentHref[--currentHref.length]) === '/' ? 'modificado' : '/modificado'
  item.setAttribute('href' ,`${currentHref}${appendHref}`)
  console.log(item.getAttribute('href'))
})