
// exercicio 4
// Dado a seguinte string 'teste 1 de 2 string 3', 
// substitua todas as ocorrências de números pelo valor '[removido]'.
const replaceNumbers = string => {
  let regex = /[0-9]+/gm;
  const newString = string.replace(regex, '[removido]');
  return console.log(newString);
}

 replaceNumbers('teste 1 de 2 string 3');
