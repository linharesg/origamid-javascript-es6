import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json()
    const numerosGrid = document.querySelector('.numeros-grid')
    animaisJson.forEach(animal => {
      const divAnimal = createAnimal(animal)
      numerosGrid.appendChild(divAnimal)
    });
    initAnimaNumeros();
  }
  
  function createAnimal(animal) {
    console.log(animal)
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  
  fetchAnimais('./animaisapi.json')
}