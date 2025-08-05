// Condicional If / else
/*
tipos de expressoes
<
>
==
>=
<=
!=
!==

*/

/*
let idade = 14;
if (idade >= 17) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é MENOR de idade.");
}
*/

// --- Comparação entre valores com == e === ---

let idade = "20";

// Usando == (comparação flexível)
// Compara apenas os valores, mesmo que os tipos sejam diferentes.
// Aqui a string "20" é convertida automaticamente para número 20.
if (idade == 20) {
    console.log("Você tem 20 anos (== permite comparação com tipos diferentes).");
}

// Usando === (comparação estrita)
// Compara valor **e** tipo. Aqui, "20" (string) NÃO é igual a 20 (número).
if (idade === 20) {
    console.log("Você tem 20 anos (comparação estrita).");
} else {
    console.log("Com ===, a comparação falha porque os tipos são diferentes.");
}
