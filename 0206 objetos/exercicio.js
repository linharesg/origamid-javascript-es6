console.log("------EXERCICIO------")
// Crie um objeto com os seus dados pessoais
var usuario = {
  nome: "Gabriel",
  sobrenome: "Linhares",
  idade: '28',
  cpf: "78978978978945",
  cidades: [
    "blumenau",
    "guaramirim",
    "jaraguá"
  ],
  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}
console.table(usuario)
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log("Nome completo: " + usuario.getNomeCompleto())
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro = {
  raça: "labrador",
  nascimento: "2014-07-19",
  latir() {
    return console.log("AU, caralho")
  },
  verAlguem() {
    this.latir()
  }

}

cachorro.verAlguem()

var nome = "gabriel"

console.log(nome.length);
console.log(nome.charAt(3));
console.log(nome.replace("ri", "ol"))
console.log(nome)
