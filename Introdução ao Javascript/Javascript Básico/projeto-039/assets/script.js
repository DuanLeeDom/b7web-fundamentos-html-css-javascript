// Trabalhando com Classes

function clicou() {
    const button = document.querySelector('button');
    
    // button.classList.add('verde'); // adicionar classe
    // button.classList.remove('azul');  // remover classe
    /*
    if (button.classList.contains('azul')) {
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.add('azul');
        button.classList.remove('verde');
    }
    */

    // button.classList.toggle('azul');
    // button.classList.replace('azul', 'verde');

    /* // outra forma para trocar as classes
    if (button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    }
    */
}