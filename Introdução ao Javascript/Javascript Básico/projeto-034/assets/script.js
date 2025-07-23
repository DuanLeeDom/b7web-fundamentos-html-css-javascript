/* ============================================================================
    MANIPULANDO ELEMENTOS DO DOM – EXEMPLO 1
    Esta função é chamada ao clicar em algum botão ou evento relacionado
============================================================================ */

function clicou() {
    // 1. Seleciona o elemento com id="teste"
    const teste = document.querySelector('#teste');

    // 2. Dentro do elemento #teste, seleciona a <ul>
    const ul = teste.querySelector('ul');

    /*
        O que você pode fazer com o conteúdo da <ul>:

        a) Substituir completamente o conteúdo HTML dela:
        ul.innerHTML = "<li>Novo item</li>";

        b) Adicionar novo conteúdo sem apagar o anterior:
        ul.innerHTML += "<li>Mais um item</li>";

        c) Alterar o conteúdo de um item específico (por exemplo, o primeiro <li>):
        ul.children[0].innerHTML = "Item <strong>modificado</strong>!";

        d) Mostrar o conteúdo atual da lista no console:
        console.log(ul.innerHTML);

        e) Trocar a lista inteira por outro elemento:
        ul.outerHTML = "<strong>Lista substituída por texto!</strong>";

        f) Exibir os elementos filhos diretos de #teste:
        console.log(teste.children); // Mostra todos os filhos diretos

        g) Acessar os filhos do segundo filho (exemplo mais avançado):
        console.log(teste.children[1].children);
    */

    // Exemplo aplicado: substitui a lista por um texto em negrito
    ul.outerHTML = "<strong>Lista substituída por texto!</strong>";
}
