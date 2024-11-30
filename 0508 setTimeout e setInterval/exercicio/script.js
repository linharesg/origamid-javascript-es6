// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const colorBlock = document.querySelector('[data-cor-tela]')

function changeColor() {
  console.log(colorBlock.dataset.corTela)
  if (colorBlock.dataset.corTela === 'blue') {
    colorBlock.dataset.corTela = 'red'
  } else {
    colorBlock.dataset.corTela = 'blue'
  }
}

// const changeColorTimer = setInterval(changeColor, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possivel
// iniciar, pausar e resetar (duplo clique no pausar).

const startBtn = document.querySelector('[data-timer="start"]')
const pauseStopBtn = document.querySelector('[data-timer="pause"]')
const timerDisplay = document.querySelector('[data-timer="display"]')
let timerInterval;
function startTimer() {
  if (timerDisplay.dataset.timerStatus === 'running') return
  timerDisplay.dataset.timerStatus = 'running'
  timerInterval = setInterval(increaseTimer , 1000)
}
function pauseTimer() {
  if (timerDisplay.dataset.timerStatus === 'paused') return
  timerDisplay.dataset.timerStatus = 'paused'
  clearInterval(timerInterval)
}
function stopTimer() {
  console.log('oi')
  clearInterval(timerInterval)
  timerDisplay.dataset.timerStatus = 'paused'
  timerDisplay.innerText = 0
}

function increaseTimer() {
  timerDisplay.innerText = parseInt(timerDisplay.innerText) + 1
}

startBtn.addEventListener('click', startTimer)
pauseStopBtn.addEventListener('click', pauseTimer)
pauseStopBtn.addEventListener('dblclick', stopTimer)