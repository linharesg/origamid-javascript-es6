// const pessoa = new Object({
//   nome: 'Gabriel',
//   idade: 28
// })

// console.log(pessoa)

// const carro = {
//   marca: 'Marca',
//   init(valor) {
//     this.marca = valor
//     return this
//   },
//   rodas: 4,
//   acelerar() {
//     return this.marca + ' acelerou'
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro)
// const fiat = Object.create(carro)
// const vw = Object.create(carro).init('vw')
// honda.marca = 'Honda'
// console.log(honda.acelerar())
// console.log(fiat.acelerar())
// console.log(vw.acelerar())

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou'
//   },
//   buzinar() {
//     return 'a moto buzinou'
//   }
// }

// const moto = {
//   rodas: 2,
//   capacete: true
// }

// Object.assign(moto, funcaoAutomovel)
// console.log(moto.buzinar())
// Object.assign(moto, funcaoAutomovel, carro)
// console.log(moto.buzinar())
// Object.assign(carro, funcaoAutomovel)
// console.log(moto)
// console.log(carro)
// // se houver alguma ropriedade/método igual, o assign vai sempre substituir, mantendo o ultimo que foi passado

// ----------------------------------


// const moto = {
//   rodas: 2
// }
// console.log(moto)
// moto.rodas = 5
// até então, todas as propriedades dese objeto são mutáveis. posso atribuir qualquer valor pra rodas por exemplo
const moto = {
  capacete: true
}
console.log(moto)

Object.defineProperties(moto, {
  rodas: {
    // value: 2, // não pode ter value atribuído quandotem get() e set()
    // configurable: false, // por padrão já é false
    // writable: false, // por padrão já é false
    // enumerable,
    get() {
      return this._rodas; 
    },
    set(valor) {
      this._rodas = valor * 4; 
    }
  }
})

console.log(Object.getOwnPropertyDescriptors(moto))
// console.log(moto)
moto.rodas = 23
moto.capacete = false
// console.log(moto)
console.log(Object.getOwnPropertyDescriptors(moto))
console.log(Object.keys(moto))
console.log(Object.values(moto))
console.log(Object.entries(moto))