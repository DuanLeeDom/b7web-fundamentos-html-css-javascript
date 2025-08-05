// Entendendo Promise
// https://jsonplaceholder.typicode.com/posts
// Promise = Promessa

function clicou() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
        
    req.then((response) => {
        return response.json(); // transformar em objeto
    })
    .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
    });

    alert("OPA, CLICOU!");
}

document.querySelector('#botao').addEventListener('click', clicou);