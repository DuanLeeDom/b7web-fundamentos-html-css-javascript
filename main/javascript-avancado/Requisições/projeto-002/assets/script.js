/*
███████╗██╗███╗   ██╗ ██████╗██████╗ ███████╗ ██████╗ ███╗   ██╗██╗   ██╗███████╗
██╔════╝██║████╗  ██║██╔════╝██╔══██╗██╔════╝██╔═══██╗████╗  ██║██║   ██║██╔════╝
███████╗██║██╔██╗ ██║██║     ██████╔╝█████╗  ██║   ██║██╔██╗ ██║██║   ██║█████╗  
╚════██║██║██║╚██╗██║██║     ██╔═══╝ ██╔══╝  ██║   ██║██║╚██╗██║██║   ██║██╔══╝  
███████║██║██║ ╚████║╚██████╗██║     ███████╗╚██████╔╝██║ ╚████║╚██████╔╝███████╗
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

🔹 SÍNCRONO VS ASSÍNCRONO EM JAVASCRIPT

→ O que significa "síncrono"?

Um código síncrono executa linha por linha, em ordem.
Ou seja, nada acontece ao mesmo tempo — a próxima linha só roda depois que a anterior termina.

📌 Exemplo:
*/

let nome = "Bonieky";
let sobrenome = "Lacerda";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Resultado: Bonieky Lacerda

/*
Aqui, cada linha é executada na sequência. Simples, previsível.

→ O que é "assíncrono"?

Assíncrono significa que certas partes do código podem ser executadas depois, sem travar o resto do programa.
É como dizer: "Continue executando o código, e quando esse pedaço terminar, me avisa."

📦 Isso é muito comum com:
- Requisições a servidores (ex: buscar dados)
- Leitura de arquivos
- Temporizadores (setTimeout, setInterval)
- Qualquer operação que demora

→ Exemplo de código assíncrono:
*/

console.log("Início");

setTimeout(() => {
  console.log("Processo assíncrono (setTimeout)");
}, 2000); // Espera 2 segundos

console.log("Fim");

/*
🧠 Resultado no console:
Início
Fim
Processo assíncrono (setTimeout)

→ Veja que "Fim" aparece antes de "Processo assíncrono",
  mesmo que a linha do setTimeout venha antes — isso é o comportamento assíncrono!

→ Por que isso é útil?

Imagine um site travando toda vez que busca dados. Seria péssimo!
Com código assíncrono, o programa **continua fluindo** enquanto espera respostas externas.

→ Como controlamos isso?

Com:
- Promises → `.then()`, `.catch()`
- async/await → facilita a leitura de código assíncrono

→ Frase para lembrar SEMPRE:

📌 "Síncrono é como uma fila — cada um espera o outro.
📌 Assíncrono é como um pedido no restaurante — você faz, continua conversando, e quando ficar pronto, o garçom te chama."

*/
