


// exercicio 1
// Crie uma função que recebe dois argumentos string e retorna o de maior 
// comprimento.
let bigger = (arg1, arg2) => {
  if(arg1.length > arg2.length)
    return arg1;
  else if(arg2.length > arg1.length)
    return arg2;
  else
    return 'Os argumentos são iguais.'; 
}

console.log(bigger('teste string','teste maior string'));


// exercicio 2
// Crie uma função que recebe três argumentos, uma função e duas string, 
// aplique a função nas duas string e imprima o resultado.

const sumLength = (arg1, arg2) => arg1.length + arg2.length;

const test = (funcao, arg1, arg2) => funcao(arg1, arg2);

console.log(test(sumLength, 'testeDeTamanho', 'teste1'));

// exercicio 3
// Crie uma função que recebe vários argumentos do tipo string e 
// imprime todos juntos
const showStrings = (...strings) => strings;

console.log(showStrings('teste1', 'teste2', 'teste3'));


// exercicio 4
// Dado a seguinte string 'teste 1 de 2 string 3', 
// substitua todas as ocorrências de números pelo valor '[removido]'.
const replaceNumbers = string => {
  let regex = /[0-9]+/gm;
  const newString = string.replace(regex, '[removido]');
  return console.log(newString);
}

 replaceNumbers('teste 1 de 2 string 3');

//  exercicio 5
//  Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} 
// substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.
var dict = new Map([[4, 'a'], [3, 'e'], [1, 'i'], [5, 's']]);

const replaceStrings = (string) => {
  for (const [key, value] of dict) {
    let search = eval('/'+key.toString()+'/g');
    string = string.replace(search, value);
  }
  return string;
}

console.log(replaceStrings('T35t3 d3 35t4g1o'));

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




// exercicio 7
// Imprima uma mensagem de saudação com o nome completo para cada um 
// dos objetos. O nome deve ter a primeira letra maiúscula.

var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const hiThere = (users) => {
  for (const user of users) {
      console.log(`Olá, ${user.nome.substring(0,1).toUpperCase()+user.nome.substring(1)} ${user.sobrenome}`);
  }
}

hiThere(users);


// exercicio 8
// Imprima a soma das idades (dica: utilize reduce)
const sumAge = users.reduce((total, next) => total + next.idade, 0);

console.log(sumAge);



// exercicio 9
// Imprima o objeto se existir alguem com menos 25 anos.
const lessAge = users.filter(user => user.idade < 25);

console.log(lessAge);



// exercicio 10
// Imprima todos os elementos em que a idade é menor que 30 anos.
const elements = users.filter(user => user.idade < 30);

const elementsAge = (users) => {
  for (const user of users) {
    console.log(`id: ${user.id}, nome: ${user.nome}, sobrenome: ${user.sobrenome}, idade: ${user.idade}`);
  }
}

elementsAge(elements);



// exercicio 11
// Ordene o array de forma decrescente por idade, 
// em caso de empate o desempate é pelo id.


console.log(users.sort((a,b) => {
  if(a.idade == b.idade)
    return parseInt(b.id) - parseInt(a.id);
  else 
    return parseInt(b.idade) - parseInt(a.idade);
}));
