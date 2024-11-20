var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}


console.log('gato' || 'cão')

// o &&, usado em comparação, sempre retorna o último valor comprarado
// com o &&, o primeiro valor falso encontrado vai ser retornado
console.log('gato' && 'cão') //cão

// o || sempre retorna o primeiro valor verdadeiro
console.log('gato' || 'cão') //gato

console.log ((5 - 5) && (5 + 5)); //0, porque a primeira expressão (5-5) é 0, que é falso, então já retorna e ignora o resto

console.log('gato' && false) //false

// switch

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log("é azul");
    break
  case 'Verde':
    console.log('é verde')
    break
  default:
    console.log('não tem cor');
}

console.log ((5 - 2) && (5 - ' '))