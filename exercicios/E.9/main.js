

// exercicio 9
// Imprima o objeto se existir alguem com menos 25 anos.
var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

// Functions
const lessAge = users.filter(user => user.idade < 25);

const renderUsers = (users) => {
  let ulElement = document.querySelector('form fieldset div');

  for (const user of users) {
    let pElement = document.createElement('p');
    pElement.innerHTML = ` Nome: ${user.nome} ${user.sobrenome}<br> Idade: ${user.idade}`;
    ulElement.appendChild(pElement);
  }
}


// calls
renderUsers(lessAge);

console.log(lessAge);


