// Operações básicas com arrays em JavaScript

// O operador de ponto (.) é utilizado para acessar propriedades ou métodos de objetos e arrays.
// Exemplo: ingredientes.length retorna o total de elementos no array.

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

// Atribuir diretamente a um índice (ex: ingredientes[7] = 'cebola') cria posições vazias (empty slots).
// Para adicionar elementos corretamente ao final, utilize o método push().
// ingredientes.push('cebola', 'batata', 'cenoura');

// Métodos úteis:
// pop()     → remove o último elemento
// shift()   → remove o primeiro elemento
// unshift() → adiciona no início do array
// splice()  → insere ou remove em posições específicas

/*
// Exemplo de uso do splice():
// Substituindo o item na posição 3 ('corante') por 'fermento'
ingredientes.splice(3, 1, 'fermento');
// Adicionando dois itens a partir da posição 2 (sem remover nada)
ingredientes.splice(2, 0, 'açúcar', 'leite');
// Removendo 1 item a partir da posição 5
ingredientes.splice(5, 1);
*/

console.log(ingredientes);
console.log(`Total de ingredientes: ${ingredientes.length}`);
