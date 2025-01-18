import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf).iniciar();

console.log(validarCpf.formatar('092=836 w/d4899 51'))