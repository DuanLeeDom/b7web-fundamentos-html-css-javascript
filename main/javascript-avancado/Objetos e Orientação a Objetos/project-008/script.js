// Introdução à Programação Funcional
// Tópico: Instância e This

/*
    Diferença entre 'class' e Orientação a Objetos:
    - 'class' é apenas uma forma de estruturar código que se assemelha à orientação a objetos.
    - Orientação a Objetos (OO) é um paradigma de programação baseado em conceitos como:
        • Encapsulamento
        • Herança
        • Polimorfismo
        • Abstração
    - Usar 'class' não significa que estamos aplicando OO corretamente — é possível usar 'class'
      sem respeitar os princípios do paradigma.
*/

/*
    Exemplo com objeto literal (forma direta e simples):
*/

let person = {
    name: 'Bonieky',
    lastName: 'Lacerda',
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
};

console.log(person.getFullName()); // Bonieky Lacerda

/*
    Exemplo com função fábrica (programação funcional):
    - Cria objetos dinamicamente sem usar 'class'.
    - Problema: a função arrow => não tem seu próprio 'this',
      então 'this.name' e 'this.lastName' não funcionam como esperado.
*/

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName: function () {
            return `${this.name} ${this.lastName}`;
        }
    };
}

let person1 = createPerson('Bonieky', 'Lacerda', 90);
let person2 = createPerson('Junior', 'Fulano', 20);

console.log(person1.getFullName()); // Bonieky Lacerda
console.log(person2.getFullName()); // Junior Fulano

/*
    Observações:
    - Ao usar arrow function para métodos, o 'this' se refere ao escopo externo,
      não ao objeto criado. Por isso, evite arrow functions em métodos de objetos.
    - Usar funções fábricas é uma abordagem funcional para criar instâncias.
    - Quando usamos objetos criados com 'new' ou 'class', falamos em instância
      no sentido clássico da orientação a objetos.
*/
