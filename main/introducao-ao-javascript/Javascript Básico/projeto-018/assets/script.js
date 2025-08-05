// Exercício de funções #5
/* 
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é lx
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(n1, n2) {
    m2 = 3000
    switch (n2) {
        case 1: 
            result = n1 * m2;
            break;
        case 2:
            result = n1 * (m2 * 1.2);
            break;
        case 3:
            result = n1 * (m2 * 1.5);
            break;
        default:
            result = "xxx.xx."
    }
    return result;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)