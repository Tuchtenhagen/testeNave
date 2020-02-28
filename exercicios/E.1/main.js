
// exercicio 1
// Crie uma função que recebe dois argumentos string e retorna o de maior 
// comprimento.
let bigger = (arg1, arg2) => {
  if(arg1.length > arg2.length)
    return arg1;
  else if(arg2.length > arg1.length)
    return arg2;
  else
    return 'Os argumentos são iguais.'; 
}

console.log(bigger('teste string','teste maior string'));

