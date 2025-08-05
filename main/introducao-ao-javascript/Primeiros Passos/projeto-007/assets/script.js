/* 
==================[ ASSUNTOS ENSINADOS NO VÍDEO ]================== 
==================[  Operações em variáveis     ]================== 
*/

// a: Operação simples em variável
let x = 0;
x = x + 1;
console.log(x); // Saída: 1

// b: Concatenação sem espaço entre strings
let nome = 'Bonieky';
let sobrenome = 'Lacerda';
let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto); // Saída: BoniekyLacerda

// c: Concatenação com espaço entre strings
let nome2 = 'Bonieky';
let sobrenome2 = 'Lacerda';
let nomeCompletoComEspaco = nome2 + ' ' + sobrenome2;
console.log(nomeCompletoComEspaco); // Saída: Bonieky Lacerda

// d: Operação matemática com números
let n1 = 15;
let n2 = 20;
let n3 = 10;

let resultado = (n1 + n2) - n3;
console.log(resultado); // Saída: 25

/* 
==================[ CONTEÚDO COMPLEMENTAR IMPORTANTE – FORA DO VÍDEO ]================== 
*/

// 1. Operações Aritméticas (números)
let a = 10;
let b = 5;

console.log(a + b);  // Soma: 15
console.log(a - b);  // Subtração: 5
console.log(a * b);  // Multiplicação: 50
console.log(a / b);  // Divisão: 2
console.log(a % b);  // Módulo (resto da divisão): 0
console.log(a ** b); // Exponenciação: 100000

// 2. Operadores de Incremento e Decremento
let valor = 0;
valor = valor + 1;
valor += 1;
valor++;
console.log(valor); // Resultado: 2

valor--;
console.log(valor); // Resultado: 1

// 3. Operadores de Atribuição Composta
let y = 10;
y += 5;  // y = y + 5 → 15
y -= 3;  // y = y - 3 → 12
y *= 2;  // y = y * 2 → 24
y /= 4;  // y = y / 4 → 6
y %= 3;  // y = y % 3 → 0
console.log(y); // Resultado final: 0

// 4. Concatenação de Strings (junção de textos)
let nome3 = 'Bonieky';
let sobrenome3 = 'Lacerda';

let juntoSemEspaco = nome3 + sobrenome3;
console.log(juntoSemEspaco); // BoniekyLacerda

let juntoComEspaco = nome3 + ' ' + sobrenome3;
console.log(juntoComEspaco); // Bonieky Lacerda

// 5. Concatenação com números
let resultadoTexto = "Resultado: " + (2 + 2);
console.log(resultadoTexto); // Resultado: 4

// 6. Operadores de Comparação (retornam true ou false)
let num1 = 10;
let num2 = 20;

console.log(num1 == num2);  // false
console.log(num1 != num2);  // true
console.log(num1 > num2);   // false
console.log(num1 < num2);   // true
console.log(num1 >= 10);    // true
console.log(num2 <= 25);    // true

// 7. Operadores Lógicos (trabalham com booleanos)
let logado = true;
let admin = false;

console.log(logado && admin); // false (ambos precisam ser true)
console.log(logado || admin); // true (basta um ser true)
console.log(!logado);         // false (nega o valor atual)
