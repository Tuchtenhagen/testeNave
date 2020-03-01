
// exercicio 10
// Imprima todos os elementos em que a idade é menor que 30 anos.
var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

// Functions
const lessAge = users.filter(user => user.idade < 30);

const renderUsers = (users) => {
  let ulElement = document.querySelector('form fieldset div');

  for (const user of users) {
    let pElement = document.createElement('p');
    pElement.innerHTML = `Id: ${user.id}<br> 
                          Nome: ${user.nome}<br> 
                          sobrenome: ${user.sobrenome}<br> 
                          Idade: ${user.idade}`;
    ulElement.appendChild(pElement);
  }
}

const elementsAge = (users) => {
  for (const user of users) {
    console.log(`id: ${user.id}, nome: ${user.nome}, sobrenome: ${user.sobrenome}, idade: ${user.idade}`);
  }
}


// Calls
renderUsers(lessAge);

elementsAge(lessAge);
