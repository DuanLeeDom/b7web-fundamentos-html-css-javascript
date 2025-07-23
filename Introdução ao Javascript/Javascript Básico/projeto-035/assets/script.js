/* ============================================================================
    MANIPULANDO ELEMENTOS DO DOM – EXEMPLO 2
    Esta função é executada quando o usuário clica em um botão ou dispara um evento
============================================================================ */

function clicou() {
    /* ------------------------------------------------------------------------
        1. Selecionando elementos do DOM
    ------------------------------------------------------------------------ */

    const teste = document.querySelector('#teste');  // Seleciona o elemento com id="teste"
    const ul = teste.querySelector('ul');            // Dentro de #teste, seleciona a <ul>

    /* ------------------------------------------------------------------------
        2. Alterando o conteúdo de um item da lista
    ------------------------------------------------------------------------ */

    // Forma 1: Usando append (adiciona texto puro ao final do conteúdo do item)
    // ul.children[0].append(" (alterado)");

    // Forma 2: Usando innerHTML += (permite inserir HTML ao final do item)
    // ul.children[0].innerHTML += " (alterado)";

    /*
        📌 Observações:
        - append(): adiciona um nó de texto (ou outro elemento) no final do conteúdo;
        - innerHTML +=: insere texto ou HTML, mas pode substituir conteúdo mal formatado;
    */

    /* ------------------------------------------------------------------------
        3. Adicionando um novo item à lista
    ------------------------------------------------------------------------ */

    // Forma recomendada: usando createElement e appendChild
    let newLi = document.createElement("li");    // Cria um novo <li>
    newLi.innerText = "Item adicionado";         // Define o texto do novo item
    ul.appendChild(newLi);                       // Adiciona no final da <ul>

    // Também poderia ser:
    // ul.append(newLi);    // Igual ao appendChild (mais moderno)
    // ul.prepend(newLi);   // Adiciona no início da lista

    /*
        🧠 Diferenças entre as abordagens:

        ✔ ul.innerHTML += "<li>...":
            - Simples, mas recria toda a lista internamente;
            - Pode remover eventos ou referências já aplicadas aos itens.

        ✔ createElement + appendChild:
            - Mais seguro e eficiente;
            - Adiciona só o novo item sem afetar os outros.
    */
}
