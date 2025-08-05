// String e Template String

/*
let nome = "Bonieky";
let sobrenome = "Lacerda";

// let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome} da Silva`

console.log("Nome: " + nomeCompleto)
*/

// --- Template literals (interpolação de variáveis e expressões) ---
// A sintaxe `${}` permite inserir variáveis e expressões diretamente dentro de uma string,
// usando crases (`) em vez de aspas simples ou duplas.

let idade = 90;

// Forma tradicional de concatenação:
// let idadeString = idade + ' anos e o próximo será ' + (idade + 1);

// Forma moderna com template string:
let idadeString = `${idade} anos e o próximo será ${idade + 1}`;

console.log(idadeString); 
// Saída: "90 anos e o próximo será 91"