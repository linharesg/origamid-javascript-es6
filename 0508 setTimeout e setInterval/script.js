function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 1000, 'depois de 1s')

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// } // todos vão ocorrer quase que ao mesmo tempo. a diferença entre cada timeout vai ser mínima, sendo só o tempo de rodar cada looping. todos eles serão ativados depois dos 3000ms passado como argumento

const btn = document.querySelector('button')

btn.addEventListener('click', handleClick)

function handleClick() {
  setTimeout(() => {
    console.log(this)
  }, 1000) //usar arrow function como callback, vai fazer o 'this' fazer referência ao this do contexto
  setTimeout(function() {
    console.log(this)
  }, 1000) //enquanto que uma function() normal vai fazer o 'this' fazer referência ao window, que é que tem a função setTimeout
}

let i = 0;

setInterval(() => {
  console.log(i++)
}, 300)