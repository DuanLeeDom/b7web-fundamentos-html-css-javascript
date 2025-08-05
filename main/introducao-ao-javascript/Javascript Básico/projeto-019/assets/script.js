// Exercício de funções #6 (mais fácil)
/* 
    Crie uma função que valide usuário e senha.l
    Usuário correto: pedro
    Senha correta: 123
*/

// Uso da função:
function validacao(user, password){
    let usuario = 'pedro'; let senha = '123'; let resultLogin = false;
    if ((user === usuario) && (password === senha)) {
        return resultLogin = true;
    } else {
        return resultLogin = false;
    }
}

let user = 'pedro'; let password = '123'; let resultLogin = (validacao(user, password));
if (resultLogin == true) {
    console.log(`Acesso concedido para o ${user}!`);
} else if (resultLogin == false) {
    console.log('Acesso NEGADO!');
}