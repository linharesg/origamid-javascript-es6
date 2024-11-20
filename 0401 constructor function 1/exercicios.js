// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.cumprimentar = function (aceno) {
    return `${aceno || "Olá"}, meu nome é ${this.nome}, tenho ${
      this.idade
    } anos`;
  };
}

const joao = new Pessoa("Joao", 20);
const carlos = new Pessoa("Maria", 25);
const tobias = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function manipulateDom(seletor) {
  this.elements = document.querySelectorAll(seletor);
  this.addClass = function (newClass) {
    if (newClass) {
      this.elements.forEach((element) => {
        element.classList.add(newClass);
        console.log(element);
      });
    }
  };
  this.removeClass = function (removedClass) {
    this.elements.forEach((element) => {
      element.classList.remove(removedClass);
    });
  };
  this.toggleClass = function (toggledClass) {
    if (toggledClass) {
      this.elements.forEach((element) => {
        if (element.classList.contains(toggledClass))
          element.classList.remove(toggledClass);
        else element.classList.add(toggledClass);
      });
    }
  };
}

const itens = new manipulateDom("li");
itens.addClass("ativo");