// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img')
const imgTop = primeiraImg.offsetTop
console.log(imgTop)

// Retorne a soma da largura de todas as imagens
function somaImagens(){ 
  let soma = 0; 
  const imgs = document.querySelectorAll('img')
  
  imgs.forEach((img) => {
    soma += img.offsetWidth
  })
  console.log(soma)
}

window.onload = function() {
  somaImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')
console.log("oi")
links.forEach(link => {
  const dimensoes = link.getBoundingClientRect()

  if (dimensoes.height < 48 || dimensoes.width < 48) {
    console.log(`não tem o tamanho recomendado (${dimensoes.height}x${dimensoes.width})`)
  }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
