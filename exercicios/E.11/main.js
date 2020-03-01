
// exercicio 11
// Ordene o array de forma decrescente por idade, 
// em caso de empate o desempate é pelo id.
var users = [
  {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
  {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
  {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
  {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

const sortUsers = users.sort((a,b) => {
  if(a.idade == b.idade)
    return parseInt(b.id) - parseInt(a.id);
  else 
    return parseInt(b.idade) - parseInt(a.idade);
});


const renderUsers = (users) => {

  var divElement = document.querySelector('form fieldset div');

  for (const user of users) {
    let pElement = document.createElement('p');
    pElement.innerHTML = `Id: ${user.id}<br> 
                          Nome: ${user.nome}<br> 
                          sobrenome: ${user.sobrenome}<br> 
                          Idade: ${user.idade}`;
    divElement.appendChild(pElement);
  }
}

renderUsers(sortUsers);