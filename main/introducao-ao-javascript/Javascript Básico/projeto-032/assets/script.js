// Lista de frutas
let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

/* ============================================================================
   1. Filtragem - Obtendo frutas com nomes maiores que 4 letras
============================================================================ */

// Forma tradicional (com retorno explícito e uso de todos os parâmetros)
let bigFruits = fruits.filter((value) => {
    return value.length > 4;
});

console.log('Frutas com nomes maiores que 4 letras:', bigFruits);

// Outras formas alternativas:

/*
// Forma mais detalhada com if/else
let bigFruits = fruits.filter((item) => {
    if (item.length > 4) {
        return true;
    } else {
        return false;
    }
});
*/

/*
// Forma simplificada (arrow function)
let bigFruits = fruits.filter(item => item.length > 4);
*/

/*
    Observação:
    O método filter() aceita até três parâmetros:
    - value: valor atual do array;
    - index: índice atual;
    - array: o array completo.

    No exemplo acima, usamos apenas 'value' para comparar o tamanho do nome.
*/


/* ============================================================================
   2. Verificação com every() - Todos os itens atendem a condição?
============================================================================ */

// Forma direta (todos os nomes têm mais de 3 letras?)
let todosMaiorQue3 = fruits.every(value => value.length > 3);

if (todosMaiorQue3) {
    console.log('Todos os itens têm mais de 3 letras.');
} else {
    console.log('Nem todos os itens têm mais de 3 letras.');
}

/*
// Forma detalhada com if/else interno
let todosMaiorQue3 = fruits.every((value) => {
    if (value.length > 3) {
        return true;
    } else {
        return false;
    }
});
*/


/* ============================================================================
   3. Verificação com some() - Algum item atende à condição?
============================================================================ */

let algumMaiorQue3 = fruits.some(value => value.length > 3);

if (algumMaiorQue3) {
    console.log('Algum item tem mais de 3 letras.');
} else {
    console.log('Nenhum item tem mais de 3 letras.');
}


/* ============================================================================
   4. Verificação com includes() - Existe um item específico no array?
============================================================================ */

let frutaProcurada = 'Uva';

if (fruits.includes(frutaProcurada)) {
    console.log(`Tem ${frutaProcurada} sim!`);
} else {
    console.log(`Não tem ${frutaProcurada}.`);
}
