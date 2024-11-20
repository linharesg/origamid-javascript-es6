// arguemtnso podem ser funções
// chamadas de Callback, são funçõesq ue ocorrem após algum evento


addEventListener('click', function(){
  console.log('Clicou');
});

// Escopo léxico: funções conseguem acessar varávels que foram criadas no contxto pai/vô/etc..

var profissao = 'bolsista';

function dados(){
  var nome = 'Gabriel';
  var idade = 28
  function outrosDados() {
    var endereco = 'Blumenau';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());