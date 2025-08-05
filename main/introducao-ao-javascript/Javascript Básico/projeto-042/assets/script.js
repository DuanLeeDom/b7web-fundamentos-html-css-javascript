// Exercício: Lista de Tarefas Simples

/* // Eu realizei o exercicio e este foi o que eu criei!
const input = document.querySelector('input');
const ul = document.querySelector('ul');   

document.addEventListener('keydown', function(e) {verification(); envio(e);} );

function verification() {
    if (input.value != ' ') {
        conteudo = input.value;
    }
}

function envio(e) {
    if (e.key == 'Enter') {
        let newLi = document.createElement("li");
        newLi.textContent = conteudo;
        ul.appendChild(newLi);
        input.value = '';
    }
}
*/

// Resolução: Lista de Tarefas Simples

// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funções
function handleKeyUp(e) {
    if (e.key === 'Enter') {
        // lista.innerHTML += '<li>' + input.value + '</li>'; // ele renderiza tudo novamente
        // Adicionar elmento LI na lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;

        // Limpar o campo de texto
        lista.appendChild(newLi);
        
        input.value = '';
    }
}

// Eventos
input.addEventListener('keyup', handleKeyUp);