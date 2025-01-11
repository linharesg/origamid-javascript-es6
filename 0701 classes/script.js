// criando um botão por constructor

function Button(text, background){
  this.text = text
  this.background = background
}

Button.prototype.element = function() {
  const newBtn = document.createElement('button')
  newBtn.innerText = this.text
  newBtn.style.background = this.background
  return newBtn
}

console.log(new Button('zul', 'blue').element())

// criando botão com class

class ButtonClass {
  constructor(text, background) {
    this.text = text
    this.background = background
    // return this.element() // por padrão retornaria o 'this', mas posso alterar para retornar direto algum método do objeto, porém não é o ideal, pois perde o acesso às demais propriedades e métodos (não consegue obter o button.text pore exemplo)
  }

  element() {
    const newBtn = document.createElement('button')
    newBtn.innerText = this.text
    newBtn.style.background = this.background
    return newBtn
  }
  appendTo(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
    return targetElement
  }

  static blueButton(text) {
    return new ButtonClass(text, 'blue').element()
  }
}

const btnClass = new ButtonClass('vermelho', 'red')
console.log(btnClass.appendTo('body'))


class ButtonOptions {
  constructor(text, options) {
    this.text = text
    this.options = options
  }

  element() {
    const newBtn = document.createElement('button')
    newBtn.innerText = this.text
    Object.entries(this.options).forEach(option => {
      const stylePropertie = option[0]
      const styleValue = option[1]
      newBtn.style[stylePropertie] = styleValue
    })
    
    return newBtn
  }

  appendTo(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.element())
    return targetElement
  }

  static createElement(text, background) {
    const button = document.createElement('button')
    button.innerText = text
    button.style.background = background
    return button
  }
}

const btnOptions = {
  background: 'green',
  border: "solid 3px red",
  minWidth: "200px",
} 
const newBtnOption = new ButtonOptions('texto', btnOptions)

newBtnOption.appendTo('body')
