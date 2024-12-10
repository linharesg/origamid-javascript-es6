async function puxarDados() {
  try {
    const responseDados = await fetch('./dados.json')
    jsonDados = await responseDados.text()
    document.body.innerText = jsonDados
  }
  catch (erro) {
    document.body.innerText = erro
  }
}

puxarDados()

async function getJson() {
  console.log('piada - iniciou fetch') // 1) assim que inicia a funcao, já printa no console
  const piada = fetch('https://api.chucknorris.io/jokes/random')
  console.log(await (await piada).json())
  console.log('piada - apos declaracao')
}

getJson()

async function testFetch( type) {
  const urlType = 'https://httpbin.org/status/' + type
  console.log(urlType)
  try {
    const result = fetch(type)
    console.log(`${type} - iniciou fetch`)
    console.log(await (await (result)).text())
    console.log(`${type} - sucesso`)
  }
  catch (e) {
    console.log(`${type} - erro`)
    console.log(e)
  }
  finally {
    console.log(`${type} - finalizou`)
  }
}

testFetch(304)
testFetch(500)


async function asyncSemPromise() {
  await setTimeout(() => console.log('depois de 1s'), 1000)
  
  console.log('acabou') //console.log não irá esperar pois o setTImeout não é uma Promise, então o await não quer dizer nada nesse caso
}
asyncSemPromise()

async function asyncComPromise() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('agora vai esperar com promise')
      resolve()
    }, 1000)
  })
  console.log('acabou com promise')
}
asyncComPromise()