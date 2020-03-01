
// exercicio 3
// Crie uma função que recebe vários argumentos do tipo string e 
// imprime todos juntos
const showStrings = (...strings) => strings;

const render = () => {
  for (let i = 0; i < parseInt(count); i++) {
    let pElement = document.createElement('p');
    let inElement = document.createElement('input');

    inElement.setAttribute('type', 'text');
    inElement.setAttribute('name', `arg${i}`);
    pElement.innerHTML = 'Digite o argumento ';

    pElement.appendChild(inElement);
    listElement.appendChild(pElement);
  }   
}

const getArgs = () => {
  for (let i = 0; i < parseInt(count); i++) {
    let getValue = document.querySelector(`input[name=arg${i}]`);
    inputArray.push(getValue.value.toString());
  } 
  alert(showStrings(inputArray));
}



var botao = document.getElementById('botao');
var listElement = document.querySelector('form fieldset div');
var inputArray = [];

var count=prompt("digite o numero de argumentos");



botao.onclick = () => getArgs();
render();

 
console.log(showStrings('teste1', 'teste2', 'teste3'));
