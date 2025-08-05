// Como ver as requisições acontecendo
// https://jsonplaceholder.typicode.com/posts

function clicou() {
    // o primeiro parametro para uma requisição simples é a propria url | then é então
    // faça uma requesição desta url e então...
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json(); // transformar em objeto
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        });
}

document.querySelector('#botao').addEventListener('click', clicou);