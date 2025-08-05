// O loop for
// let cores = ['preto', 'branco', 'azul', 'vermelho', 'laranja'];
let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt:15}
];
// cores.push('verde');

/*
for (let n = 0; n < length; n++) {    
    console.log(cores[n])
}
 */

/* 
for (let i in cores) {
    console.log(cores[i]);
}
 */

/* 
for (let cor of cores) {
    console.log(cor);
}
 */ 
/* 
for (let i in cores) {
    console.log(`Nome: ${cores[i].nome} - ${cores[i].qt}`);
}
 */
for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
}

console.log(cores);


/* for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
} */