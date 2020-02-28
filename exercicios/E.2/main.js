
// exercicio 2
// Crie uma função que recebe três argumentos, uma função e duas string, 
// aplique a função nas duas string e imprima o resultado.

const sumLength = (arg1, arg2) => arg1.length + arg2.length;

const test = (funcao, arg1, arg2) => funcao(arg1, arg2);

console.log(test(sumLength, 'testeDeTamanho', 'teste1'));

