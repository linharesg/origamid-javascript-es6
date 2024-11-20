function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

// const honda = new Carro(); // Honda é m objeto que vem do constutor Carro

// honda.teste = 'oi'
// honda.andar = function(){
//   return "andouu"
// }

// const fiat = new Carro()

// fiat.marca = 'Fiat'

const honda = new Carro('honda', '2000')
const fiat = new Carro('Fiat', '5000')

function Carro2(marcaAtribuida, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa
  this.marca = marcaAtribuida;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000)