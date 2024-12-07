// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  paragrafoPiada.classList.add('waiting')
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
  .finally(() => {paragrafoPiada.classList.remove('waiting')})
}
btnProxima.addEventListener('click', puxarPiada);

puxarPiada();