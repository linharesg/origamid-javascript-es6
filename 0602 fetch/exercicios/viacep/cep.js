// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.querySelector('#cep')

function updateAddress(cepJson) {
  const addressForm = document.forms.address
  Array.from(addressForm).forEach(field => {
    if (field.name !== 'cep') {
      field.value = cepJson[field.name] || ''
    } 
  })
}

function getCepData(cep) {
  const url =  `https://viacep.com.br/ws/${cep}/json/`
  const cepData = fetch(url)
  cepData
  .then(r => r.json())
  .then(json => updateAddress(json))
  .catch(e => console.log(e))
}

function checkCep() {
  const cepValue = this.value 
  const cepRegex = /^\d{5}-?\d{3}$/
  if (!cepValue.match(cepRegex)) return
  getCepData(cepValue)
}

const events = ['keyup', 'change']
events.forEach(userEvent => {
  cep.addEventListener(userEvent, checkCep)
})

