// INTRODUÇÃO A FUNÇÕES
// Estrutura: ENTRADA -> PROCESSAMENTO -> SAÍDA

// Função sem parâmetros (executa sempre o mesmo comportamento)
/*
function gravidade() {
    console.log('A gravidade do planeta é: ');
    console.log(9.8);
}

console.log('Olá, tudo bem?'); // Mensagem inicial
gravidade(); // Chamada da função
*/

// -------------------------------------

// 1. FUNÇÕES COM PARÂMETROS
// Permite que a função receba valores externos para realizar seu processamento

/*
function somar(n1, n2) {
    // PROCESSAMENTO: soma os dois valores
    let resultado = n1 + n2;

    // SAÍDA: exibe o resultado no console
    console.log('Resultado: ' + resultado);
}

somar(10, 15); // Chamada da função com dois valores (argumentos)
*/

// -------------------------------------

/*
function nomeCompleto(nome, sobrenome) {
    // Concatena os parâmetros e exibe no console
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Bonieky", "Lacerda");
nomeCompleto("João", "Silva");
*/

// -------------------------------------

// 2. FUNÇÕES COM RETORNO
// Ao invés de apenas exibir algo, a função pode *retornar* um valor para ser reutilizado

/*
function nomeCompleto(nome, sobrenome) {
    // RETORNO: devolve a string completa para quem chamou
    return `${nome} ${sobrenome}`;
}

// Armazenando o retorno da função em uma variável
let completo = nomeCompleto("Bonieky", "Lacerda");

// SAÍDA: exibe o valor retornado
console.log(`Completo: ${completo}`);
*/

// -------------------------------------