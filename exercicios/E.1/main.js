
// exercicio 1
// Crie uma função que recebe dois argumentos string e retorna o de maior 
// comprimento.

let botao = document.getElementById('botao');


let bigger = (arg1, arg2) => {
  if(arg1.length > arg2.length)
    return arg1;
  else if(arg2.length > arg1.length)
    return arg2;
  else
    return 'Os argumentos são do mesmo tamanho.'; 
}

botao.onclick = function(){
  let inputElementFirst = document.querySelector('input[name=firstArg]');
  let arg1 = inputElementFirst.value;

  let inputElementSecond = document.querySelector('input[name=secondArg]');
  let arg2 = inputElementSecond.value;
  
  alert(bigger(arg1.toString(), arg2.toString()));
  location.reload();
}




console.log(bigger('teste string','teste maior string'));
