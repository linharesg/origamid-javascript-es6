// const cpfElements = Array.from(document.querySelectorAll('.cpf li'))
const cpfElements = [...document.querySelectorAll('.cpf li')]

cpfElements.forEach(element => {
  const rawCpf = element.innerText
  const regex = /(\d{3})[.\s-]?(\d{3})[.\s-]?(\d{3})[.\s-]?(\d{2})/
  const clearCpf = rawCpf.replace(regex, '$1.$2.$3-$4')
  element.innerText = clearCpf
})