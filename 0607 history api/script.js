const links = document.querySelectorAll('a')

function handleClick(event) {
  event.preventDefault()
  fetchPage(event.target.href)
  window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
  const htmlContent = document.querySelector('.content')
  htmlContent.innerText = 'Carregando'
  try {
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    if (pageResponse.ok) {
      replaceContent(pageText)
    } else {
      throw Error('Ocorreu um erro ao tentar abrir a página')
    }
  }
  catch (e){
    htmlContent.innerText = 'Falha ao carregar a página\n' + e
  }
}

function replaceContent(newText) {
  const newHtml = document.createElement('div')
  newHtml.innerHTML = newText

  const oldContent = document.querySelector('.content')
  const newContent = newHtml.querySelector('.content')

  document.title = newHtml.querySelector('title').innerText
  oldContent.innerHTML = newContent.innerHTML

}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href)

})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})