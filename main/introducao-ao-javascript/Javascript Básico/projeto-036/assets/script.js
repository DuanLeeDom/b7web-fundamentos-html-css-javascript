// Manipulando elementos - Exemplo 3

function clicou() {
    // Seleciona o elemento com ID 'teste'
    const teste = document.querySelector('#teste');

    // Seleciona a <ul> dentro de #teste
    const ul = teste.querySelector('ul');

    // Cria uma nova lista não ordenada <ul> e a insere após a <ul> existente
    const novaLista = document.createElement('ul');
    ul.after(novaLista);

    // Adiciona 5 novos itens à nova <ul>
    for (let i = 0; i < 5; i++) {
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `Item add ${i + 1}`;
        novaLista.append(novoItem);
    }

    /*
    // Exemplo adicional: inserindo um botão após a <ul>
    const novoBotao = document.createElement('button');
    novoBotao.innerHTML = "Botão";
    ul.after(novoBotao);
    */
}
