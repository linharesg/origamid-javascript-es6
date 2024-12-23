function print(argumento) {
    console.log(`${argumento}: ${eval(argumento)}`);
}

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const primeiroRemovido = comidas.shift()
print("primeiroRemovido")


// Remova o último valor de comidas e coloque em uma variável
const ultimoRemovido = comidas.pop()
print("ultimoRemovido")
// Adicione 'Arroz' ao final da array

comidas.push("arroz")
print("comidas")

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.splice(0, 0, "peixe", "batata")
comidas.splice(0, 0, ...["peixe11", "batata11"]) // também funciona
console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort())
// Inverta a ordem dos estudantes
console.log(estudantes.reverse())
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const bkpCarros = carros.slice()
carros.pop()
console.log(bkpCarros)
console.log(carros)