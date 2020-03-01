
// exercicio 6
// Utilizando a api da viacep (https://viacep.com.br/) e o seu cep 
// como entrada imprima o seu endereço no formato 
// 'ENDERECO, NUMERO, CIDADE/ESTADO'.
let botao = document.getElementById('botao');

var endereco = {
    cep: '',
    endereco:'',
    numero:'',
    cidadeEstado: '',
};

const searchAdress = (endereco) => {

  let inputElementFirst = document.querySelector('input[name=arg1]');
  let inputElementSecond = document.querySelector('input[name=arg2]');

  endereco.cep = parseInt(inputElementFirst.value);
  endereco.numero = parseInt(inputElementSecond.value);


  axios.get(`https://viacep.com.br/ws/${endereco.cep}/json/`)
  .then(response =>{
    endereco.endereco = response.data.logradouro;
    endereco.cidadeEstado = response.data.localidade + '/' + response.data.uf;

    if(endereco.cep == '' || endereco.numero == null)
      return alert('cep ou número inválido');

    return alert(`${endereco.endereco}, ${endereco.numero}, ${endereco.cidadeEstado}`);
  })
  .catch(error => {
    return alert(error+' cep inválido');
  });
}

botao.onclick = () => teste = searchAdress(endereco);




