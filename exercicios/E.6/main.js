
// exercicio 6
// Utilizando a api da viacep (https://viacep.com.br/) e o seu cep 
// como entrada imprima o seu endereço no formato 
// 'ENDERECO, NUMERO, CIDADE/ESTADO'.
var cep = 96030360;
var endereco = {
    endereco:'',
    numero:0,
    cidadeEstado: '',
};
axios.get(`https://viacep.com.br/ws/${cep}/json/`)
.then(response =>{
  endereco.endereco = response.data.logradouro;
  endereco.numero = 450;
  endereco.cidadeEstado = response.data.localidade + '/' + response.data.uf;
  endereco.cidadeEstado = 
  console.log(`${endereco.endereco}, ${endereco.numero}, ${endereco.cidadeEstado}`);
})
.catch(error => {
  console.log(error);
});

