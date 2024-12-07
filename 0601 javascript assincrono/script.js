// setTimeout(function() {
//   console.log('Time 1')
// })

// setTimeout(function() {
//   console.log('Time 2')
// }, 50)

// console.log("log 1")

// setTimeout(function() {
//   console.log('Time 3')
// }, 100)

// console.log("log 2")

// // PROMISES

// const promessa = new Promise((resolveQualquer, rejectQualquer) => {
//   let condicao = true;
//   if (condicao) {
//     resolveQualquer({"retorno": "de qualquer tipo"})
//   } else {
//     rejectQualquer(Error('dá pra rejeitar um erro'))
//   }
// })

// promessa.then(resolucaoQualquer => {
//   console.log(resolucaoQualquer)
// })

// const promessa2 = new Promise((resolveQualquer, rejectQualquer) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolveQualquer({"nome": "Gabriel"})
//     }, 2000)
//   } else {
//     rejectQualquer(Error('usando o catch'))
//   }
// })

// promessa2.then(resolucaoQualquer =>  console.log(resolucaoQualquer))
// .catch(rejectQualquer => {
//   console.log(rejectQualquer)
//   return 'teste'
// })
// .finally(() => {
//   console.log("acabou, independente do resultado")
//   return "tem returno?"
// })

const login = new Promise((resolve, reject) => {
  console.log('analisando credenciais...')
  setTimeout(() => {
    let senhaCorreta = true
    if (senhaCorreta){
      console.log('usuario logado')
      resolve('usuario logado')
    } else {
      reject(Error("Senha incorreta!"))
    }
  }, 1500)
})

const dados = new Promise((resolve, reject) => {
  console.log("analisando dados....")
  setTimeout(() => {
    let temDados = true

    if (!temDados) {
      console.log("Dados carregados com sucesso")
      resolve('dados carregados')
    } else {
      reject('rejeitou com uma string')
    }
  }, 3000)
})
.finally("tem ou nao tme dados")

const carregouTudo = Promise.all([login, dados]).then((tesultadoLogin) => {console.log(tesultadoLogin)})