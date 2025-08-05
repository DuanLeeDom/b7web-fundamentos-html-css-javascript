/* 
    Tópico: Classes – Variáveis e Métodos Estáticos em JavaScript

    Em JavaScript, a palavra-chave `static` é utilizada para definir propriedades (variáveis)
    e métodos que pertencem diretamente à classe, e não às suas instâncias.

    Isso significa que:
    - Variáveis estáticas são acessadas diretamente pelo nome da classe, e **não** por instâncias criadas a partir dela.
    - Métodos estáticos também são chamados diretamente pela classe, sem a necessidade de instanciar um objeto.

    No exemplo abaixo, a propriedade `hands` e o método `sayHi` são estáticos.
    Sendo assim, ambos pertencem à classe `Person`, e não a objetos como `p1`.
*/

class Person {
    // Propriedade estática: pertence à classe, não às instâncias
    static hands = 2;

    // Propriedade de instância (individual para cada objeto)
    age = 0;

    constructor(name) {
        this.name = name;
    }

    /*
    // Exemplo de método de instância:
    // Este método só poderia ser chamado por um objeto (instância), como: p1.sayHi()
    sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
    }
    */

    // Método estático: pertence à classe, não pode acessar `this`
    static sayHi() {
        console.log(`Oi`);
    }
}

// Criação de uma instância da classe Person
let p1 = new Person("Bonieky");

// Exemplos de uso de membros estáticos:
// Person.hands = 3; // Modifica a propriedade estática
// console.log(`${p1.name} tem ${Person.hands} mãos.`);

// Chamada de método estático
Person.sayHi();
