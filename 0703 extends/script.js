class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas
    this.combustivel = combustivel
  }
  acelerar() {
    console.log('acelerou')
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete, combustivel) {
    super(rodas, combustivel)
    this.capacete = capacete
  }
  empinar() {
    console.log(`Empinhou com ${this.rodas} rodas.`)
  }
}