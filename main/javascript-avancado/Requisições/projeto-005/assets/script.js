// O que é um Callback? | call back = ligar de volta
/* 
  callback, aplicado a programação:
  estou criando uma função e essa função vou passar para uma parte do código, e essa função vai ser executada por alguém mais tarde
*/

function clickCallback() {
  alert("Clicou no botãozinho!");
};

document.querySelector('#botao')
  .addEventListener('click', clickCallback); // O evento só vai acontecer se houver uma chamada

/* Explição do código:

funcaozinha para quando clicar no botão:
- requisição a url X
- tá aqui o callback para quando você tiver a resposta:
-- callbackMaroto

*/