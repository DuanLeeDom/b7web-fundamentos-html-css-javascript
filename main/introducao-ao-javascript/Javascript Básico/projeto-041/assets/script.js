// Eventos de teclado 2

// coloca o primeiro parâmetro como um objeto de evento
function soltou(e) {
    // usamos o code para um processo mais avançado o key para um processo mais simples
    // console.log(e.code); // tem dois tipos de código: code e key
    // console.log(e.key); // em jogo isso é muito usado, é algo mais solto
    console.log('TECLA APERTADA: ' + e.code);
    console.log('SHIFT? ' + e.shiftKey);
    console.log('CTRL? ' + e.ctrlKey);
    console.log('ALT? ' + e.altKey);
    console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);