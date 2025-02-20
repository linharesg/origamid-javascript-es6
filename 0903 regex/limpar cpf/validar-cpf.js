export default class ValidarCpf {
  constructor(element) {
    this.element = element
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf)
    return this.construir(cpfLimpo)
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(\d{3}[-.\s]?){3}\d{2}/g)
    console.log(matchCpf)
    return (matchCpf && matchCpf[0] === cpf)
  }
  
  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value)
      cpfElement.classList.remove('erro')
      cpfElement.classList.add('valido')
      cpfElement.nextElementSibling.classList.remove('ativar')
    } else {
      cpfElement.classList.add('erro')
      cpfElement.classList.remove('valido')
      cpfElement.nextElementSibling.classList.add('ativar')
    }
  }
  
  adicionarEvento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element)
    })
  }

  adicionarErroSpan() {
    const errorElement = document.createElement('span')
    errorElement.classList.add('erro-text')
    errorElement.innerText = 'CPF Inválido'
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling)
  }
  
  iniciar() {
    this.adicionarEvento()
    this.adicionarErroSpan()
    return this
  }
}