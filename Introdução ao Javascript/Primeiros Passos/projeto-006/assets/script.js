/* Tipos de declaração de variáveis em JavaScript: var, let e const */

// --- var ---
// Forma mais antiga de declarar variáveis.
// Pode ser redeclarada e reatribuída, o que pode causar problemas em códigos maiores.
var nome = "Bonieky"
nome = "João" // Reatribuição
console.log(nome) // Saída: João

// --- let ---
// Introduzido no ES6 (moderno), é mais seguro que var.
// Pode ser reatribuído, mas NÃO pode ser redeclarado no mesmo escopo.
// Ajuda a evitar erros comuns na criação de variáveis.
let nome1 = "Lucas"
nome1 = "Pedro" // Reatribuição
console.log(nome1) // Saída: Pedro

// --- const ---
// Também introduzido no ES6.
// Constantes: não podem ser reatribuídas após a declaração.
// Muito útil para valores fixos que não devem mudar.
const nome2 = "Ricardo"
console.log(nome2) // Saída: Ricardo

// nome2 = "Carlos" // Isso causaria um erro: TypeError: Assignment to constant variable.
