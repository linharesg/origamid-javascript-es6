// const Dom = {
//   seletor: 'li',
//   // mesma coisa que element: function() {...}
//   element() {
//     return document.querySelector(this.seletor)
    
//   },
//   ativar() {
//     this.element().classList.add('ativo')
//   }
// }

// Dom.seletor = 'ul'

function Dom(seletor) {
  // mesma coisa que element: function() {...}
  this.element = function() {
    return document.querySelector(seletor)
  },
  this.ativar = function() {
    this.element().classList.add('ativo')
  }
}

const li = new Dom('li')
const ul = new Dom('ul')

li.ativar()
