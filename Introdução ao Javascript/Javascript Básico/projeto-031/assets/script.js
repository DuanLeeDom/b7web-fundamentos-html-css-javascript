// Ordenação de array


/* 
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

// Ordena o array em ordem alfabética
fruits.sort(); // do a to z
console.log(fruits);

// Na proxima etapa precisa a combinação entre a função sort e a função reverse para inverter a ordem alfabética
// Ordenar o array em ordem alfabética reversa
fruits.reverse(); // do z to a
console.log(fruits); 
*/

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020}
]

/*
// temos duas propriedade para ordenar, a marca e o ano
// Ordena o array de objetos por marca
cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
*/

// simplificado a função de ordenação
cars.sort((a, b) => b.year - a.year);

console.log(cars);