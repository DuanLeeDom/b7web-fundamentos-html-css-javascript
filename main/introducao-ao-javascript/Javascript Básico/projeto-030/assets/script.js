// Funções de array
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

/* 
// Adiciona um item entre os itens do array o join dentro do array mesmo.
console.log(fruits.join(', '));
*/


// primeira forma | alteração de um item do array:
fruits[ fruits.length - 1 ] = 'Pêra';


// segunda forma | alteração de um item do array:
fruits.pop();
fruits.push('Pêra');

console.log(fruits);