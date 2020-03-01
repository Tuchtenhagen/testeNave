
// exercicio 4
// Dado a seguinte string 'teste 1 de 2 string 3', 
// substitua todas as ocorrências de números pelo valor '[removido]'.
let botao = document.getElementById('botao');


const replaceNumbers = string => {
  let regex = /[0-9]+/gm;
  const newString = string.replace(regex, '[removido]');
  return newString;
}
 
 botao.onclick = () => getString();

const getString = () => {
  let inputElementFirst = document.querySelector('input[name=arg1]');
  
  if(inputElementFirst.value == '')
    alert(replaceNumbers('teste 1 de 2 string 3'));
  else
    alert(replaceNumbers(inputElementFirst.value.toString()));
}

console.log(replaceNumbers('teste 1 de 2 string 3'));