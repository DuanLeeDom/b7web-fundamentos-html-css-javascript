/* 
    Tópico: Classes e Herança em JavaScript

    Neste exemplo, demonstramos o uso de herança entre classes. A classe `Student` estende
    a classe `Person`, herdando seus atributos e comportamentos, e podendo também sobrescrevê-los.

    A palavra-chave `super` é utilizada para acessar o construtor e métodos da classe pai.

    A palavra-chave `this` refere-se à instância atual do objeto, seja ela uma pessoa ou um estudante.
*/

class Person {
    age = 0; // Propriedade pública com valor inicial

    constructor(name) {
        this.name = name; // Inicializa o nome da pessoa
    }

    // Método que imprime uma saudação no console
    sayHi() {
        console.log(`${this.name} diz OI`);
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name); // Chama o construtor da classe pai (Person)
        this.id = id; // Inicializa o número de matrícula do estudante
    }

    // Sobrescrita (override) do método sayHello da classe pai
    sayHello() {
        super.sayHi();
        // console.log(`${this.name} é um estudante e diz OI`);
    }
}

// Criação de uma instância da classe Student
let p1 = new Student("Bonieky", 1);

// Definição de idade específica para a instância
p1.age = 20;

// Chamada do método sobrescrito
p1.sayHello();

// Exibição detalhada das informações da instância
console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`);