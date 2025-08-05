// Manipulando atributos

function clicou() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }

    // se existir um atributo, podemos alterar o valor dele
    // input.setAttribute('type', 'text');

    /*  // Verificar se existe um atributo
    if(input.hasAttribute('placeholder')) {
        console.log('Tem placeholder SIM!');
    } else {
        console.log('Não tem placeholder...');
    }
    */

    /* // pegar atributos se existirem
    console.log(input.getAttribute('type')); // text
    console.log(input.getAttribute('name')); // algo
    console.log(input.getAttribute('placeholder')); // Digite o que quiser
    console.log(input.getAttribute('class')); // input
    */
}
