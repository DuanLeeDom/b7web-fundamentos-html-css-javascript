// Funcional: Herança

const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Bonieky',
    email: 'suporte@b7web.com.br'
}

let adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'adm@admboladao.com.br',
    level: 2
}

console.log(user1);
console.log(adm1);