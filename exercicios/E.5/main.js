
//  exercicio 5
//  Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} 
// substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.
var dict = new Map([[4, 'a'], [3, 'e'], [1, 'i'], [5, 's']]);
let botao = document.getElementById('botao');

const replaceStrings = (string) => {
  for (const [key, value] of dict) {
    let search = eval('/'+key.toString()+'/g');
    string = string.replace(search, value);
  }
  return string;
}

botao.onclick = () => getString();

const getString = () => {
  let inputElementFirst = document.querySelector('input[name=arg1]');
  
  if(inputElementFirst.value == '')
    alert(replaceStrings('T35t3 d3 35t4g1o'));
  else
    alert(replaceStrings(inputElementFirst.value.toString()));
}

console.log(replaceStrings('T35t3 d3 35t4g1o'));
