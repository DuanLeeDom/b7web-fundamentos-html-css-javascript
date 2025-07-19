// Arrow Function

/*
function somar(x, y) {
    return x + y;
}
*/

/*
  Estrutura de uma Arrow Function (Função de Seta):

  - Parênteses (): utilizados para declarar os parâmetros da função.
  - Seta =>: indica que se trata de uma arrow function.
  - Chaves {}: delimitam o bloco de código que será executado.

  Exemplo:
    const minhaFuncao = (param1, param2) => {
        // bloco de código
    };

  Essa é a sintaxe moderna e mais concisa para declarar funções em JavaScript.
*/
/*
const somar = (x, y) => x + y;

console.log(somar(10, 5))
*/
/*
function sobrenome(sob) {
    return 'Bonieky ' + sob;
}
console.log(sobrenome('Lacerda'));
*/

function sobrenome1(sob) {
    return 'Bonieky ' + sob;
}

const sobrenome2 = sob => 'Bonieky ' + sob;
const sobrenome3 = (sob) => 'Bonieky ' + sob;
const sobrenome4 = (sob) => {
    return 'Bonieky ' + sob;
}
const sobrenome5 = (sob) => {
    let nomeCompleto = 'Bonieky ' + sob;
    return nomeCompleto;
}
console.log(sobrenome1('Lacerda'));




