// Variáveis dentro de funções
// escopo local/global

let count = 0;

function add() {
    let count = 0;
    count += 10;
}

add();
add();

console.log(count);