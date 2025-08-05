// Gerenciando erros na Promise / Tipos de status de uma requisição
// https://jsonplaceholder.typicode.com/posts
// Promise = Promessa

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status

function clicou() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
        
    req.then((response) => {
        // console.log(`Status: ${response.status}`); // tipo de status
        return response.json(); // transformar em objeto
    })
    .then((json) => { // pegar o objeto
            alert(`Titulo do primeiro post: ${json[0].title}`);
    })
    .catch((error) => { // tratamento de erros
        alert("Deu problema na requisição");
        console.log(error);
    })
    .finally(() => {
        alert("OPA, ACABOU TUDO!");
    });
}

document.querySelector('#botao').addEventListener('click', clicou);