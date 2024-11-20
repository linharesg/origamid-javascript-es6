var videoGames = ['Switch', 'PS4', 'XBOX'];

var ultimoItem = videoGames.pop()// retorna o último item do array e remove do array

videoGames.push("ds")

tamanho = videoGames.length

for (var numero = 0; numero < 10; numero++) {
  console.log(numero)
};

for (var item = 0;item < videoGames.length; item++){
// console.log(videoGames[item])
};

videoGames.forEach(function(itemzinho, indicezinho, arrayzinho) {
  console.log(indicezinho + ": " + itemzinho, arrayzinho)
});

var brasilCampeao = [1959, 1962, 1970, 1994, 2002]

brasilCampeao.forEach(function(item, index) {
  console.log(`O ${index +1}º título do Brasil foi em ${item}`)
});

var ultimoAno = brasilCampeao[brasilCampeao.length -1]
console.log(ultimoAno)
 