/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência 
ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; 
*/

// informando string
let text = 'casaco';

// transformando em array
let arraytext = text.split('')

// exibindo quantidade de caracteres da string
let numbrtext = String(text).length;

// decrementador da variavel copia
let rating = numbrtext - 1;
let copia = [];

// estrutura de repetição, elaborada de acordo com a string declarada.
while(arraytext.length <= numbrtext) {

    copia.push(arraytext[rating])
    rating = rating - 1
    arraytext.pop();

    if(arraytext.length <= 0) {
        break
    }
}

let textReverse = copia.join('');
console.log(textReverse)

// Ao executar será visualizado no terminal a string inversa
