/* 
    Tópico: Classes, Construtor, This e Getter em JavaScript

    Em JavaScript, as classes são definidas com a palavra-chave `class` e,
    por convenção, seus nomes devem começar com letra maiúscula.

    O método especial `constructor` é utilizado para inicializar as propriedades
    do objeto no momento de sua criação.

    A palavra-chave `this` refere-se à instância atual do objeto, permitindo acessar
    suas propriedades e métodos internos.

    O método acessor `get` é utilizado para obter o valor de uma propriedade de forma
    controlada e elegante, respeitando os princípios de encapsulamento.
*/

class Person {
    // Propriedades públicas com valores iniciais
    steps = 0;

    // Construtor chamado automaticamente ao instanciar a classe
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = 10; // Valor inicial privado da propriedade 'age'
    }

    // Método para simular um passo dado pela pessoa
    takeAStep() {
        this.steps++;
    }

    // Getter para retornar o nome completo
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Getter da propriedade 'age'
    get age() {
        return this._age;
    }

    // Setter da propriedade 'age' com verificação de tipo
    set age(x) {
        if (typeof x === 'number') {
            this._age = x;
        }
    }
}

// Criação de instâncias (objetos) da classe Person
let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro", "Duarte");

// Modificação da idade da instância p1
p1.age = 30;

// Exibição das informações no console
console.log(`${p1.fullName} tem ${p1.age} anos`);
