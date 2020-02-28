import users from './main';

// exercicio 7
// Imprima uma mensagem de saudação com o nome completo para cada um 
// dos objetos. O nome deve ter a primeira letra maiúscula.



const hiThere = (users) => {
  for (const user of users) {
      console.log(`Olá, ${user.nome.substring(0,1).toUpperCase()+user.nome.substring(1)} ${user.sobrenome}`);
  }
}

hiThere(users);

