/* 
// Parte 1 | // Colocando propriedade e valor.
let personagem = {
    nome: 'Bonieky',
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,   
        stamina: 15   
    }
}

// console parte de acesso
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[1]);
 */

/* 
// Parte 2 | // Acessando e alterando objetos
let personagem = {
    nome: 'Bonieky',
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,   
        stamina: 15   
    }
}

personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');

console.log(personagem.olhos);
 */

/* 
let personagem = {
    nome: 'Bonieky',
    idade: 90,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'ferrari', cor: 'vermelho'}
    ]
}

// visualização dos vetores com objetos dentro de objetos 
console.log(personagem.carros[1].cor);
 */

/* 
// Parte 3 | // Função dentro de objeto
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    // a funcionalidade normal dentro de um objeto a criação da 'function'
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
    // caso usarmos o arrow function como algo assim: '() => {}' não conseguira usar o 'this' pois é uma operação anônima.
}

console.log(pessoa.nomeCompleto());
console.log(pessoa.nome + ' ' + pessoa.sobrenome);
 */