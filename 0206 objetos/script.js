var pessoa = {};

console.log(!!Object.keys(pessoa).length);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado ** 2;
  },
  perimetro(lado) {
    return lado * this.lados;
  }
  // funções de objeto podem ser escritas com NOME: function (parametro) {...}
  // ou
  // NOME(parametro) {...}
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(8));
console.log(Math.E);
console.table(quadrado);
// 'console' tambem é um objeto, assim como Math
// todo objeto pode ter propriedades e métodos (funções). o "E" (euler) é uma propriedade de Math (Math.E), já o random é um método (Math.random()). Pra identificar pelo vscode se algo é método ou propridade, é só ver pelo bloqueino que aparece antes da sugestão: um parelelepipedo azul é propriedade e um cubo roxo é método


var a = {};
console.log(typeof a) // 'a' já é um objeto, só por ser inicializado com {}

//  um objeto também tem acesso Às veriáveis que foi criado fora do escopo dele:

var height = 60
var menu = {
  width: 800,
  height: 100,
  metadeHeightObjeto() {
    return this.height / 2;
    // mesma coisa que return menu.height / 2;
  },
  metadeHeightForaEscopo() {
    return height / 2;
    // pega o height de fora do objeto
  }
}

console.log(menu.metadeHeightObjeto())
console.log(menu.metadeHeightForaEscopo())

