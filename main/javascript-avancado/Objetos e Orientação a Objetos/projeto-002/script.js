/* 
    Classes: Construtor e This
   
    Em JavaScript, as classes são definidas com a palavra-chave `class` e,
    por convenção, seus nomes devem começar com letra maiúscula.
    O construtor (`constructor`) é o método especial utilizado para inicializar 
    as propriedades do objeto no momento em que ele é criado.
    A palavra-chave `this` refere-se ao objeto atual (instância).
 */

class Person {
    // Propriedade da classe com valor inicial
    age = 0;

    // Construtor chamado automaticamente ao criar uma nova instância
    constructor(name) {
        this.name = name; // Define a propriedade 'name' com o valor recebido
    }
}

// Criação de instâncias (objetos) da classe Person
let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

// Modificação de propriedade específica da instância p1
p1.age = 20;

// Exibição dos dados de cada objeto no console
console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);
