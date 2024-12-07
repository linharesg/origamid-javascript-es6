// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoinValueBrl = document.querySelector('[data-bitcoin="valueBrl"]')
// let bitcoinTimer = setInterval(getBlockchainValue, 1000)

function getBlockchainValue() {
  const bitcoinData = fetch('https://blockchain.info/ticker')
  bitcoinData
  .then(r => r.json())
  .then(jsonResponse => {
    console.log(jsonResponse.BRL.buy)
    bitcoinValueBrl.innerText = jsonResponse.BRL.buy
  })
}

getBlockchainValue()
