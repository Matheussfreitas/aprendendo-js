function createProduct(name) {
    const product = {}
    
    product.name = name
    product.details = function() {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product;
}

// o new cria um novo objeto utilizando a estrutura da função construtora
const product1 = new createProduct("Teclado");
console.log(product1);
product1.details();

const product2 = new createProduct("Teclado");
console.log(product2);
product2.details();

function Person(name) {
    this.name = name
    this.message = function() {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Matheus");
console.log(person1.name);
person1.message();