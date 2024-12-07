const doc = fetch('./doc.txt')

doc
.then(resolucao => {
  return resolucao.text()
})
.then(body => {
  const conteudo = document.querySelector('.conteudo')
  conteudo.innerText = body
  console.log(body)
})

const cep = fetch('https://viacep.com.br/ws/89036500/json')
cep.then(resolucao => resolucao.json())
.then(resolucao => console.log(resolucao))

const div = document.createElement('div')
document.body.appendChild(div)
const sobre = fetch('./sobre.html')
sobre.then(r => r.text())
.then(aaa => {
  setTimeout(() => {
    // console.log(aaa)
    div.innerHTML = aaa
  }, 2000)
})

const img = fetch('./image_3.png')
img.then(r => r.blob())
.then(response => {
  console.log(response)
  const blobUrl = URL.createObjectURL(response)
  const img = document.querySelector('[data-img-fetch]')
  img.src = blobUrl
})