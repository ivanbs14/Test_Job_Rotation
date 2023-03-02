/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1
 e o próximo valor sempre será a soma dos 2 valores anteriores 
 (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
 escreva um programa na linguagem que desejar onde, 
 - informado um número, 
 - ele calcule a sequência de Fibonacci 
 - e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência 
ou pode ser previamente definido no código; 
*/

let numbr = 10;

let previous = 0;
let next = 1;
let soma = 0;

while(next < numbr) {
    soma = next + previous
    previous = next
    next = soma

    if(numbr == soma) {
        console.log(`The number ${numbr}, belongs to fibonacci sequence`)
    }

    if(numbr < soma) {
    return console.log(`The number ${numbr}, is not a fibonacci sequence`)
    }
}

// Ao executar será visualizado no terminal se o numbr declarado pertence a sequência de Fibonacci ou não.
