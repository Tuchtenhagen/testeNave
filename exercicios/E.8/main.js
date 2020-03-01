
// exercicio 8
// Imprima a soma das idades (dica: utilize reduce)
var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const sumAge = users.reduce((total, next) => total + next.idade, 0);

const getUsers = () => alert('A soma da idade dos usuários é: '+sumAge); 

let botao = document.getElementById('botao');


const renderUsers = (users) => {

  var ulElement = document.querySelector('form fieldset div');

  for (const user of users) {
    let pElement = document.createElement('p');
    pElement.innerHTML = ` Nome: ${user.nome} ${user.sobrenome}<br> Idade: ${user.idade}`;
    ulElement.appendChild(pElement);
  }
}

renderUsers(users);
botao.onclick = () => getUsers();


