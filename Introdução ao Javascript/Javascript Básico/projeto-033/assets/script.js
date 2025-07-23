// O que é DOM? DOM = Document Object Model
// É uma interface de programação para documentos HTML e XML.
// Permite que linguagens de programação acessem e modifiquem o conteúdo, estrutura e estilo dos documentos.

/* ============================================================================
   SELETORES DOM (Document Object Model)
   Como selecionar elementos no HTML usando JavaScript
============================================================================ */

/* === 1. Selecionar por **Tag** (retorna coleção de elementos) === */
document.getElementsByTagName("h1");   // Seleciona todos os elementos <h1>
document.getElementsByTagName("div");  // Seleciona todos os elementos <div>

/* === 2. Selecionar por **ID** (retorna apenas 1 elemento) === */
document.getElementById("teste");      // Seleciona o elemento com id="teste"

/* === 3. Selecionar por **Classe** (retorna coleção de elementos) === */
document.getElementsByClassName("botao");  // Seleciona todos com class="botao"

/* === 4. Selecionar com **querySelector** (mais moderno e flexível) === */

// Por ID (mesmo que getElementById)
document.querySelector("#teste");      // Seleciona o primeiro elemento com id="teste"

// Por Classe (mesmo que getElementsByClassName, mas retorna só o primeiro)
document.querySelector(".botao");      // Seleciona o primeiro com class="botao"

// Por Tag
document.querySelector("h1");          // Seleciona o primeiro <h1>
document.querySelector("li");          // Seleciona o primeiro <li>

/* === 5. Selecionar **vários elementos** (retorna uma NodeList) === */
document.querySelectorAll("li");                // Todos os <li>
document.querySelectorAll("#teste1 ul li");     // Todos os <li> dentro de <ul> dentro do elemento com id="teste1"

/* ============================================================================
    EVENTOS DE CLIQUE
    Este exemplo utiliza o método addEventListener para tratar eventos
============================================================================ */

// 1. Seleciona o botão com a classe "botao"
let botao = document.querySelector(".botao");

// 2. Adiciona um "ouvinte" de evento de clique no botão
// Quando o botão for clicado, a função clicou() será executada
botao.addEventListener("click", () => { clicou(); });

// 3. Função que será chamada quando o botão for clicado
function clicou() {
    console.log("Clicou no botão!");
}
