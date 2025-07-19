// Funções dentro de funções
/*
  Orientação do professor:

  Sempre que for declarar uma função dentro de outra (função aninhada),
  recomenda-se utilizar a sintaxe de arrow function (=>).

  Motivo: a arrow function torna o código mais limpo e organizado,
  especialmente quando o comportamento desejado pode ser escrito em uma única linha.

  Apesar disso, a escolha entre function tradicional e arrow function
  depende do contexto e da legibilidade do código. De modo geral,
  prefiro utilizar arrow function pela praticidade e clareza visual que proporciona.
*/


function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));