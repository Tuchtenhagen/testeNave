
// exercicio 7
// Imprima uma mensagem de saudação com o nome completo para cada um 
// dos objetos. O nome deve ter a primeira letra maiúscula.
var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const renderUsers = (users) => {

  var ulElement = document.querySelector('form fieldset');

  for (const user of users) {
    let pElement = document.createElement('p');
    pElement.innerHTML = `Olá, ${user.nome.substring(0,1).toUpperCase()+user.nome.substring(1)} ${user.sobrenome}`;
    ulElement.appendChild(pElement);
    // console.log(`Olá, ${user.nome.substring(0,1).toUpperCase()+user.nome.substring(1)} ${user.sobrenome}`);
  }
}

renderUsers(users);

